import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Login } from './login/login';
import { Register } from './register/register';
import { Auth } from '../service/auth';

export const routes: Routes = [
    { path: '', component: LandingPage},
    { path: 'login', component:Login},
    { path: 'register', component:Register },
    { path: '**', redirectTo: '' }
];
