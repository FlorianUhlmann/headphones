import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckService } from './shared/services/auth-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'headphones';

  constructor(private router:Router, public authService: AuthCheckService) {}
  isEqual() {
    return true;
  }

  isLoggedIn!: boolean;


}
