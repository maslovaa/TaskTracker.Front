import { Component } from '@angular/core';
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-authorization-registration-page',
    standalone: true,
    templateUrl: './authorization-registration-page.component.html',
    styleUrl: './authorization-registration-page.component.css',
    imports: [AuthorizationComponent, HeaderComponent, RouterOutlet]
})
export class AuthorizationRegistrationPageComponent {

}
