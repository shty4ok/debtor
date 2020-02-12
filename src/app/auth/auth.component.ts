import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authFg: FormGroup;

  constructor(
    private fb:FormBuilder,
    private apiService:ApiService
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

    this.apiService.login(this.authFg).subscribe();
  }
}
