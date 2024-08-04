import { ProjectModel } from "./project-model";
import { TaskModel } from "./task-model";

export interface DeskModel {
    id?: string;
    name: string;
    tasks?: TaskModel[];
    projectId: string;
}