import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Contact} from '../../Classes/contact';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Patterns} from '../../Classes/patterns';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  // styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  title = 'Edit contact';

  // contactForm: FormGroup;
  // private nameFC: FormControl;
  // private lastNameFC: FormControl;
  // private addressFC: FormControl;
  // private descriptionFC: FormControl;
  // private emailFC: FormControl;
  // private phoneFC: FormControl;

  constructor(public dialogRef: MatDialogRef<EditFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contact) {

    if (!this.data) // if no data
    {
      this.title = 'New contact';
      this.data = new Contact();
    }

    // this.addressFC =
    //   new FormControl(this.data.address, [Validators.required, Patterns.addressPattern]);
    // this.descriptionFC =
    //   new FormControl(this.data.description);
    // this.emailFC =
    //   new FormControl(this.data.email, [Validators.required, Patterns.emailPattern]);
    // this.lastNameFC =
    //   new FormControl(this.data.lastName, [Validators.required, Patterns.namePattern]);
    // this.nameFC =
    //   new FormControl(this.data.name, [Validators.required, Patterns.namePattern]);
    // this.phoneFC =
    //   new FormControl(this.data.phone, Patterns.phonePattern);
    // this.contactForm = new FormGroup({
    //     address: this.addressFC,
    //     description: this.descriptionFC,
    //     email: this.emailFC,
    //     lastName: this.lastNameFC,
    //     name: this.nameFC,
    //     phone: this.phoneFC
    //   }
    // );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
