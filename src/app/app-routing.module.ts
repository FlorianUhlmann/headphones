import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './core/guards/authentication.guard';
import { LazyAuthGuard } from './core/guards/lazy-auth.guard';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, children: [
    {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    
  ]},
  {path: 'home', canLoad:[LazyAuthGuard], loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'error-demo', loadChildren: () => import('./components/error-demo/error-demo.module').then(m => m.ErrorDemoModule) },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
