import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nameFormControl = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]);
  companyNameFormControl = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern("(0)[0-9 ]{11}")]);

  form: FormGroup
  status: boolean = false

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this._createForm()
    this.form = fb.group({
      name: this.nameFormControl,
      company: this.companyNameFormControl,
      email: this.emailFormControl,
      phone: this.phoneFormControl,
      message: ''
    })
  }

  ngOnInit(): void {
  }

  _createForm(): void {
  }

  send(): void {
    if (this.form.valid) {
      this.dataService.sendData(this.form.getRawValue())
      console.log(this.form.getRawValue());
    }
  }

  menu_active(){
    console.log(this.status)
    !this.status ? this.status = true : this.status = false
  }
}
