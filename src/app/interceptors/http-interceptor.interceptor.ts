import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubjectsService } from '../services/behavior-subjects.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private behavoirSubjects:BehaviorSubjectsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.behavoirSubjects.setIsLoadingRequest(true)
    return next.handle(request).pipe(finalize(()=>this.behavoirSubjects.setIsLoadingRequest(false)));
  }
}
