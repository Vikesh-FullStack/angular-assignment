import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userDetails: User | undefined;
  editForm = EditComponent.getEditForm();
  constructor() { }

  ngOnInit(): void {
    this.userDetails = history.state;
    if (this.userDetails) {
      EditComponent.setFormVal(this.editForm.controls, 'name', this.userDetails.name);
      EditComponent.setFormVal(this.editForm.controls, 'email', this.userDetails.email);
      EditComponent.setFormVal(this.editForm.controls, 'phone', this.userDetails.phone);
    }
  }

  onSubmit(){
    if (this.editForm.valid) {
      //api call
    }
  }
  static setFormVal(formC: { [x: string]: { markAsTouched: () => void;
      setValue(value: any): void;
      markAsUntouched(): void;
    }; }, key: string | number, value: any, markUntouched = true) {
    try {
      formC[key].setValue(value);
      if (markUntouched) {
        formC[key].markAsUntouched();
      } else {
        formC[key].markAsTouched();
      }
    } catch (e) {}
  }
  static getEditForm() {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }
}
