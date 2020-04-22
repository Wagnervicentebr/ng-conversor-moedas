import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { MoedaServiceService } from './servicos/moeda-service.service';



@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaServiceService
  ]
})
export class ConversorModule { }
