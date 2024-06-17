import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { DeskContainerComponent } from "./components/desk-container/desk-container.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [HeaderComponent, DeskContainerComponent]
})
export class MainPageComponent {

}
