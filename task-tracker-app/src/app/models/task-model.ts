import { StatusModel } from "./status-model";

export interface TaskModel {
    id?: string;
    ticket: string;
    head: string;
    body: string;
    comment: string;
    statusId: string;
    deskId: string;
}