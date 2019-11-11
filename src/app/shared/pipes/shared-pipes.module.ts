import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFetch} from './fetch.pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppFetch],
  exports: [AppFetch]
})
export class SharedPipesModule {
}
