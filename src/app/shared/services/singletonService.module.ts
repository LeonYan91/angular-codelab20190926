import {NgModule} from '@angular/core';
import {CustomHttpClient} from './custom-http-client/CustomHttpClient';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomInterceptor} from '../intercetor/CustomInterceptor';
import {ConfirmService} from './confirm-service/confirm.service';
import {CRUDService} from './crud-service/crud.service';
import {CityService} from './city-service/city-service';

/**
 * Created by leonyan on 2019/10/22.
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CustomHttpClient,
    ConfirmService,
    CRUDService,
    CityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    }
  ]
})
export class SingletonServiceModule {
}
