import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';
import { IUserLogin } from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }


  loginForm: FormGroup;
  errorMessage: string;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, ValidationService.emailValidator]],
      password: ["", [Validators.required, ValidationService.passwordValidator]]
    });
  }

   submit({ value, valid }: { value: IUserLogin; valid: boolean }) {

  //  submit() {

    console.log(this.loginForm)
    console.log(value)
    
    if(this.authService.login(value)) {
      console.log('back from successful login')
      if (!this.authService.redirectUrl) {
        this.authService.redirectUrl = '/welcome';
      }
      this.router.navigateByUrl(this.authService.redirectUrl);
  
    }
    else {
      console.log('back from unsuccessful login')
      alert('Invalid login try again')
    }
  //  this.authService.login(value);
    
    

    // this.authService.login(value).subscribe(
    //   (status: boolean) => {
    //     if (status) {
    //       alert("Logged in");
    //       if (this.authService.redirectUrl) {
    //         const redirectUrl = this.authService.redirectUrl;
    //         this.authService.redirectUrl = "";
    //         this.router.navigate([redirectUrl]);
    //       } else {
    //         this.router.navigate(["/albums"]);
    //       }
    //     } else {
    //       const loginError = "Unable to login";
    //       this.errorMessage = loginError;
    //       console.log(loginError);
    //     }
    //   },
    //   (err: any) => console.log(err)
    // );
  }




  // login() {
  //   this.authService.login('user', 'root');
  //   if (!this.authService.redirectUrl) {
  //     this.authService.redirectUrl = '/welcome';
  //   }
  //   this.router.navigateByUrl(this.authService.redirectUrl);
  // }

  logout() {
    this.authService.logout();
    this.authService.redirectUrl = '/login';
  }



}
