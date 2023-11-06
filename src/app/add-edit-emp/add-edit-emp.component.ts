import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post-Graduate',
  ];

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogref: MatDialogRef<AddEditEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      compny: '',
      exp: '',
      package: '',
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onSubmitForm() {
    debugger;
    if (this.empForm.valid) {
      if (this.data) {
        this.service
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Employee details updated successfully');
              // console.log(val)
              this.dialogref.close(true);
            },
            error: (err: any) => {
              alert(err);
            },
          });
      } else {
        this.service.getEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee added successfully');
            // console.log(val)
            this.dialogref.close(true);
          },
          error: (err: any) => {
            alert(err);
          },
        });
      }
    }
  }
}
