import {Component, Input, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomHttpClient} from '../../../shared/services/custom-http-client/CustomHttpClient';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-car-brand-intro',
  templateUrl: './car-brand-intro.component.html'
})
export class CarBrandIntroComponent {

  @Input()
  actionTitle: string;
  @Input()
  editModel: any = {};


  constructor(
    public activeModal: NgbActiveModal,
    private customHttpClient: CustomHttpClient
  ) {
  }

  confirm() {
    this.update(this.editModel);
  }

  update(obj: object) {
    console.log(obj);
    this.customHttpClient.post('CarBrand/Update', obj).subscribe(result => {
      if (result.code === '00') {
        this.activeModal.close();
      }
    });
  }
}
