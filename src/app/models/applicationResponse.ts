export class ApplicationResponse {

    public errorType: string = "warning";
    constructor(public code: number, public message: string){}
}