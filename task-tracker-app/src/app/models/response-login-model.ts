import { UserModel } from "./user-model";

export interface ResponseLoginModel {
    user: UserModel;
    token: string;
    errorMessage?: string;
}