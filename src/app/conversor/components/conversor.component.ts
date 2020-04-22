import { Component, OnInit, ViewChild } from '@angular/core';
import { MoedaService } from '../servicos/moeda.service';
import { ConversorService } from '../servicos/conversor.service';
import { Moeda } from '../models/moeda.model';
import { Conversao } from '../models/conversao.model';
import { ConversaoResponse } from '../models/conversao-response.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(private moedaService: MoedaService, private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarMoedas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      alert("Convertendo: " + JSON.stringify(this.conversao));
    }
  }
}
