import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { MoedaService } from './servicos/moeda.service';
import { ConversorService } from './servicos/conversor.service';



@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
