import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserLoginInfo } from '../interfaces/login-info';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginInfo = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
   this.loginService.login(this.user).pipe(
    catchError((error: HttpErrorResponse) => {
      alert(error.message);
      throw error;
    })
   ).subscribe((result) => {
    localStorage.setItem('toke', result?.user.token);
    this.router.navigateByUrl('/');
   });
  }

}
