import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authFg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authFg = this.fb.group( {
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authFg.invalid) {
      return;
    }
    this.authService.login(this.authFg.value).subscribe(authRes => {
      if (authRes.status) {
        this.authService.isLogin(true);
        this.authService.setToken(authRes.token);
        this.router.navigateByUrl(`main`);
      } else {
        this.authService.isLogin(false);
        this.router.navigateByUrl('');
      }
    });
  }
}
