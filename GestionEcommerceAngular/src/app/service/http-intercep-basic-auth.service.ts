import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepBasicAuthService {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
   

    let basicchaine=sessionStorage.getItem('t');
  if(basicchaine)
  {
    req=req.clone({
      setHeaders:{
        Authorization: basicchaine
      }
    })
  }
    

 return next.handle(req);

  }
}
