import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";


export class AuthInterceptor implements HttpInterceptor {

    constructor(
        public auth: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requisicaoAlterada: HttpRequest<any>;
        let token = localStorage.getItem('token');

        requisicaoAlterada = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

        return next.handle(requisicaoAlterada);
    }
}