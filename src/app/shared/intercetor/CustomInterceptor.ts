/**
 * Created by thundersoft on 2017/7/24.
 */

import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';


/**
 * 第一级的拦截器，所有http请求都会通过
 */
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  notification: {
    addSuccess?: string,
    modifySuccess?: string,
    delSuccess?: string
  } = {};

  constructor(private toastr: ToastrService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.notification = event.translations.notification;
    })
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let nextOb = next.handle(req).pipe(event => {
      //20191028 since httpTranslateModule of ng-translate in root module use HttpClient as deps, as this interceptor is config for the root HttpClient's interceptor,
      // so the httpTranslateModule will enter this interceptor too.The best practice is to inject another HttpClient instance to httpTranslateModule instead of from
      // root injector, but now use string pattern to filter request to static resource.
      if(req.url && (req.url.indexOf('/assets/i18n') > -1)){
        return event;
      }
      event.subscribe(res => this.handResponse(res));
      return event;
    });

    return nextOb;
  }

  handResponse(response: any) {
    //错误信息拦截
    if (response.body && response.body.code != '00') {
      this.toastr.clear();
      window.setTimeout(() => {
        this.toastr.error(response.body.message);
      }, 0);
    } else {
      if (response.url) {
        let msg;
        if (response.url.indexOf('Add') != -1) {
          msg = this.notification.addSuccess;
        } else if (response.url.indexOf('Update') != -1) {
          msg = this.notification.modifySuccess;
        } else if (response.url.indexOf('Delete') != -1) {
          msg = this.notification.delSuccess;
        }
        //todo 上传成功
        if (msg) {
          msg = msg+'!';
          this.toastr.clear();
          window.setTimeout(() => {
            this.toastr.success(msg);
          }, 0);


        }
      }
    }
  }

}
