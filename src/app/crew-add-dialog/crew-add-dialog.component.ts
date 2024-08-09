import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crew-add-dialog',
  templateUrl: './crew-add-dialog.component.html',
  standalone: false,
})
export class CrewAddDialogComponent {
  crewForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CrewAddDialogComponent>
  ) {
    this.crewForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      nationality: [''],
      title: [''],
      daysOnBoard: [0],
      dailyRate: [0],
      currency: [''],
    });
  }

  onSave(): void {
    this.dialogRef.close(this.crewForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
