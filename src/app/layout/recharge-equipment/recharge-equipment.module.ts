import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RechargeEquipmentComponent} from './recharge-equipment.component';
import {RechargeEquipmentRoutingModule} from './recharge-equipment-routing.module';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';
import {WidgetModule} from '../../shared/components/widget/widget.module';
import {RechargeEquipmentEditComponent} from './recharge-equipment-edit.component';
import {RechargeEquipmentRecordComponent} from './recharge-equipment-record.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RechargeEquipmentRoutingModule,
    PageHeaderModule,
    WidgetModule,
    NgbModule
  ],
  declarations: [
    RechargeEquipmentComponent,
    RechargeEquipmentEditComponent,
    RechargeEquipmentRecordComponent
  ],
  entryComponents: [
    RechargeEquipmentEditComponent,
    RechargeEquipmentRecordComponent
  ]
})
export class RechargeEquipmentModule {
}
