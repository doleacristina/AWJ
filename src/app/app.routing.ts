import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { IsLoggedIn } from './infrastructure/is-logged-in';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [IsLoggedIn] },
    { path: 'attendance', component: AttendanceComponent, canActivate: [IsLoggedIn] },
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];