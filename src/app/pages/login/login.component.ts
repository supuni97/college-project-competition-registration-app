import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../sevices/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  userService = inject(UserService);

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onRegisterRedirect() {
    window.location.href = '/register'; // Adjust path as needed
  }

  onLogin() {
    debugger;
    const formValue = this.loginForm.value;
    console.log('Form data:', formValue);

    this.userService.onUserLogin(formValue).subscribe({
      next: (res: any) => {
        debugger;
        localStorage.setItem('studentId', res.userId);
        // console.log('Server responded:', res);
        alert('User found');
        window.location.reload();
      },
      error: (err: any) => {
        debugger;
        console.error('Error from server:', err);
        alert('Wrong credentials');
      },
    });
  }
}
