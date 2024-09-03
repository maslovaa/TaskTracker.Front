import { Component } from '@angular/core';
import {
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { ColumnContainerComponent } from "../column-container/column-container.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header-desk-container',
    standalone: true,
    templateUrl: './header-desk-container.component.html',
    styleUrl: './header-desk-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, ColumnContainerComponent]
})
export class HeaderDeskContainerComponent {
    deskId!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.deskId = params['deskid'];
        });
    }
}
