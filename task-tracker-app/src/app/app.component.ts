import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorizationRegistrationPageComponent } from "./pages/authorization-registration-page/authorization-registration-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AuthorizationRegistrationPageComponent, MainPageComponent]
})
export class AppComponent {
  title = 'task-tracker-app';
}
