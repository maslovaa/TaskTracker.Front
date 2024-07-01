import { Component } from '@angular/core';
import {
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { ColumnContainerComponent } from "../column-container/column-container.component";


@Component({
    selector: 'app-desk-container',
    standalone: true,
    templateUrl: './desk-container.component.html',
    styleUrl: './desk-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, ColumnContainerComponent]
})
export class DeskContainerComponent {

}
