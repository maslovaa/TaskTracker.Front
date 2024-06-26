import { Component } from '@angular/core';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [SideMenuComponent]
})
export class MainPageComponent {

}
