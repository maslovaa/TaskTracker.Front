import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeskContainerComponent } from "../desk-container/desk-container.component";
import { RouterModule, Routes  }   from '@angular/router';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.css',
    imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule, MatSidenavModule, MatListModule, MatExpansionModule, DeskContainerComponent, RouterModule]
})
export class SideMenuComponent {

}
