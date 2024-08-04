import { Component } from '@angular/core';
import {
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { ColumnContainerComponent } from "../column-container/column-container.component";
import { ActivatedRoute } from '@angular/router';
import { DeskService } from '../../../../services/desk.service';
import { TaskModel } from '../../../../models/task-model';


@Component({
    selector: 'app-header-desk-container',
    standalone: true,
    templateUrl: './header-desk-container.component.html',
    styleUrl: './header-desk-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, ColumnContainerComponent]
})
export class HeaderDeskContainerComponent {
    deskId!: string;
    tasks: TaskModel[] = []

    constructor(private route: ActivatedRoute, private deskService: DeskService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.deskId = params['deskid'];
          this.deskService.getDesksId(this.deskId).subscribe((data) => {
            if (data.tasks === undefined)
                return;

            this.tasks = data.tasks;
          });
        });
    }
}
