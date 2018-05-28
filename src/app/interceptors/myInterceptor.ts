import { HttpInterceptor, HttpHandler, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpResponse, HttpRequest, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse |
        HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req);
    }
}