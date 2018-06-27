import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {

  title = 'Caelum Pic';
  listaFotos;

  constructor(conexaoApi: HttpClient) {
    this.listaFotos = conexaoApi.get('http://localhost:3000/v1/fotos');
  }

}
