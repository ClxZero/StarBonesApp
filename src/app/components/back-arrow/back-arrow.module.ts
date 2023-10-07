import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import { BackArrowComponent } from './back-arrow.component';

@NgModule({
  declarations: [BackArrowComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [BackArrowComponent],
})
export class BackArrowModule {}
