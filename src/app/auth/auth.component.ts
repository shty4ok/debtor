import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authFg: FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService:AuthService
  ) {
    this.authFg = this.fb.group( {
      login: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authFg.invalid) {
      return;
    }
    console.log(this.authFg.value);

    this.authService.login(this.authFg.value).subscribe();
  }
}
