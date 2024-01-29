import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private toster: ToastrService, private spin: NgxSpinnerService,
     private route: Router, private auth: AuthService) { }

  ngOnInit():void {
    if (this.auth.isLoggedIn()) {
      this.route.navigate(['dashboard']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15),
    Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]),

  });

  loginSubmit() {

    this.spin.show();

    setTimeout(() => {

      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;

        if (email === 'amitke211@gmail.com' && password === '1234Ke') {
          this.toster.success('Login Successful!');

          this.spin.hide();
          let data = this.loginForm.value;

          const encodeData = btoa(JSON.stringify(data)).toString();
          localStorage.setItem('local_data', encodeData);

          this.route.navigate(['/dashboard']);


        } else {
          this.toster.error('Invalid email or password. Please try again');
          this.spin.hide();
        }

      }

    }, 2000);



  }



  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


}
