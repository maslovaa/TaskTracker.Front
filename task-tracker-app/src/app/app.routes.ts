import { Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization-registration-page/components/authorization/authorization.component';
import { RegistrationComponent } from './pages/authorization-registration-page/components/registration/registration.component';
import { HeaderDeskContainerComponent } from './pages/main-page/components/header-desk-container/header-desk-container.component';
import { AdminContainerComponent } from './pages/main-page/components/admin-container/admin-container.component';
import { EmptyComponent } from './pages/main-page/components/empty/empty.component';

export const routes: Routes = [
    /*{ path: '', redirectTo: '/authorization', pathMatch: 'full' },
    { path: 'authorization', component: AuthorizationComponent },
    { path: 'registration', component: RegistrationComponent },*/
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: EmptyComponent },
    { path: 'main/:deskid', component: HeaderDeskContainerComponent },
    { path: 'admin', component: AdminContainerComponent }
];
