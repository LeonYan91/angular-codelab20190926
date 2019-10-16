import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-charging-pile-information',
  templateUrl: './charging-pile-information.component.html'
})
export class ChargingPileInformationComponent {

  @Input()
  actionTitle: string;
  @Input()
  editModel: any = {};

  constructor(public activeModal: NgbActiveModal) {
    console.log(this.editModel);
  }

  confirm() {
    this.activeModal.close(this.editModel);
  }

}
