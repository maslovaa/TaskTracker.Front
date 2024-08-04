import { DeskModel } from "./desk-model";
import { UserModel } from "./user-model";

export interface ProjectModel {
    id?: string;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    status: string;
    owner?: UserModel;
    users?: UserModel[];
    desks?: DeskModel[];
}