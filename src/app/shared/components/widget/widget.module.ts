import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DatagridComponent} from './datagrid/datagrid.component';
import {ToolModule} from '../../services/tool.module';
import {ValidationMsgDirective} from '../validation-msg/validation-msg.directive';
// import {ChartsModule} from 'ng2-charts';
import {Uploader} from './uploader/uploader.service';
import {UploaderModalComponent} from './uploader/uploader-modal.component';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {SharedPipesModule} from '../..';
// import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolModule,
    HttpClientModule,
    // ChartsModule,
    // FileUploadModule
  ],
  declarations: [
    DatagridComponent,
    ValidationMsgDirective,
    UploaderModalComponent
  ],
  entryComponents: [UploaderModalComponent],
  exports: [
    DatagridComponent,
    ValidationMsgDirective,
    // ChartsModule,
    // FileUploadModule,
    TranslateModule,
    FormsModule,
    CommonModule,
    SharedPipesModule
  ],
  providers: [Uploader]
})
export class WidgetModule {


}
