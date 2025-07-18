import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: '',
  };

  http = inject(HttpClient);

  onRegister() {
    debugger;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/register',
        this.registerObj
      )
      .subscribe((res: any) => {
        alert('Student registration success');
      });
  }
}
