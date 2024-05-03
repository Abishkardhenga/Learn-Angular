import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AppComponent } from './app.component';
import { ErrorhandlingComponent } from './pages/errorhandling/errorhandling.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo:"home", pathMatch:"full"},
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    {path:'login', component: LoginComponent},
    {path:"**", component: ErrorhandlingComponent}
];
