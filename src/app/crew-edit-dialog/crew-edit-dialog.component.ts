import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crew } from '../models/crew.model';

@Component({
  selector: 'app-crew-edit-dialog',
  templateUrl: './crew-edit-dialog.component.html',
  styleUrls: ['./crew-edit-dialog.component.css'],
})
export class CrewEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CrewEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Crew
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Dialog kapandığında güncellenmiş veriyi döndür
    this.dialogRef.close(this.data);
  }
}
