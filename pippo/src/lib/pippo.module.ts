import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PippoComponent } from './pipppo.component';

@NgModule({
  declarations: [
    PippoComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [PippoComponent]
})
export class PippoModule { }
