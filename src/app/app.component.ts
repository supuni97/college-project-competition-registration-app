import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './sevices/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'college-project-competition-registration-app';

  userService = inject(UserService);
  router = inject(Router);
  onLogoff() {
    localStorage.removeItem('studentId');
    this.userService.loggedUserId = '';
    this.router.navigateByUrl('/home');
  }
}
