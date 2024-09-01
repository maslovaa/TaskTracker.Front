import { Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization-registration-page/components/authorization/authorization.component';
import { RegistrationComponent } from './pages/authorization-registration-page/components/registration/registration.component';
import { HeaderDeskContainerComponent } from './pages/main-page/components/header-desk-container/header-desk-container.component';
import { AdminContainerComponent } from './pages/main-page/components/admin-container/admin-container.component';
import { EmptyComponent } from './pages/main-page/components/empty/empty.component';
import { AuthorizationRegistrationPageComponent } from './pages/authorization-registration-page/authorization-registration-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { authCheckGuard } from './guards/auth-check.guard';
import { logOutCheckGuard } from './guards/log-out-check.guard';

export const routes: Routes = [
    { path: '', component: AuthorizationRegistrationPageComponent, canActivate: [logOutCheckGuard], children: [
        { path: 'authorization', component: AuthorizationComponent, canActivate: [logOutCheckGuard] },
        { path: 'registration', component: RegistrationComponent, canActivate: [logOutCheckGuard] }
    ] },
    { path: '', component: MainPageComponent, canActivate: [authCheckGuard], children: [
        { path: 'main', component: EmptyComponent, canActivate: [authCheckGuard] },
        { path: 'main/:deskid', component: HeaderDeskContainerComponent, canActivate: [authCheckGuard] },
        { path: 'admin', component: AdminContainerComponent, canActivate: [authCheckGuard] }
    ] }
];
