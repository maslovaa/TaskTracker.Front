import { StatusModel } from "./status-model";
import { UserModel } from "./user-model";

export interface TaskModel {
    id?: string;
    ticket: string;
    head: string;
    body: string;
    comment: string;
    statusId: string;
    deskId: string;
    performerId: string;
    performer?: UserModel;
}