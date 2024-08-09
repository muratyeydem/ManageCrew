import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrewService } from '../services/crew-service.service';
import { Crew } from '../models/crew.model';
import { CrewAddDialogComponent } from '../crew-add-dialog/crew-add-dialog.component';
import { CrewEditDialogComponent } from '../crew-edit-dialog/crew-edit-dialog.component';
@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list-component.component.html',
  styleUrls: ['./crew-list-component.component.css'],
})
export class CrewListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'nationality',
    'title',
    'daysOnBoard',
    'dailyRate',
    'currency',
    'totalIncome',
    'actions',
  ];
  dataSource = new MatTableDataSource<Crew>();

  constructor(
    private crewService: CrewService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.dataSource.data = this.crewService.getCrewList();
  }

  deleteCrew(index: number) {
    this.crewService.deleteCrew(index);
    this.dataSource.data = this.crewService.getCrewList();
    this.cdr.detectChanges(); // Değişiklikleri algıla
  }
  editCrew(crew: Crew, index: number): void {
    const dialogRef = this.dialog.open(CrewEditDialogComponent, {
      width: '400px',
      data: { ...crew }, // Bu, crew objesini dialoga gönderir
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Güncellenen veriyi serviste güncelle
        this.crewService.updateCrew(index, result);
        // Listeyi yeniden yükle
        this.dataSource.data = this.crewService.getCrewList();
        this.cdr.detectChanges();
      }
    });
  }

  openAddCrewDialog(): void {
    const dialogRef = this.dialog.open(CrewAddDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.crewService.addCrew(result);
        this.dataSource.data = this.crewService.getCrewList();
        this.cdr.detectChanges(); // Değişiklikleri algıla
      }
    });
  }
}
