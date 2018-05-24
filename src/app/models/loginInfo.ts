import { UserType } from "./userType";

export class LoginInfo {
    constructor(public username: string, public password: string, public type: UserType){}
}