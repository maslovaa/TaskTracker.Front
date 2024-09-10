import { UserModel } from "./user-model";

export interface ResponseLoginModel {
    userId: string;
    user: UserModel;
    token: string;
    errorMessage?: string;
}