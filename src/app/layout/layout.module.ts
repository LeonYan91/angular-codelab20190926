import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent, SidebarComponent} from '../shared';
import {WidgetModule} from '../shared/components/widget/widget.module';
import {LoginService} from '../login/login.service';
import {FormsModule} from '@angular/forms';
import {BusinessToolModule} from '../shared/business-selector/business-tool.module';
import { ComTestComponent } from './com-test/com-test.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    LayoutRoutingModule,
    TranslateModule,
    WidgetModule,
    BusinessToolModule,
    NgbCollapseModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ComTestComponent,
  ],
  providers: [LoginService],
  schemas: [
    {name: 'NO_ERRORS_SCHEMA'}
  ]
})
export class LayoutModule {
}
