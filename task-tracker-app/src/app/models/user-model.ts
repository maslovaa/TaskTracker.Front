import { RoleModel } from "./role-model";

export interface UserModel {
    name: string;
    surname: string;
    patronymic: string;
    userName: string;
    email: string;
    role?: RoleModel;
}