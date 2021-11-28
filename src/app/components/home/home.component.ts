import {Component} from '@angular/core';
import {HttpLoadingStateService} from 'src/app/shared/loading/http-loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public loadingState: HttpLoadingStateService) {}
}
