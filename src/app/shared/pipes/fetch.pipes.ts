import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomHttpClient} from '../services/custom-http-client/CustomHttpClient';

@Pipe({
  name: 'appFetch',
  pure: false
})
export class AppFetch implements PipeTransform {
  cacheUrl: string;
  cacheData: any;
  constructor(private httpClient: CustomHttpClient){

  }
  transform(url: string): any {
    if(this.cacheUrl != url){
      this.cacheData = null;
      this.cacheUrl = url;
      this.httpClient.get(url).subscribe(data => {
        this.cacheData = data

      });
    }
    return this.cacheData;
  }

}
