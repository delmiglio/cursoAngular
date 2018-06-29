import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FotoService } from "../services/foto.serivce";
import { FotoComponent } from "../foto/foto.component";
// import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent()
  // foto = {
  //   titulo: "",
  //   url: "",
  //   descricao: ""
  // };
  mensagem = {
    tipo: "",
    texto: ""
  };

  constructor(private servico: FotoService) {

  }

  ngOnInit() {
    
  }

  salvar() {
    this.servico.cadastrar(this.foto).subscribe(
      resposta => {
        this.mensagem.texto = `${this.foto.titulo} cadastrada com sucesso`;
        this.mensagem.tipo = "success";
      },
      erro => {
        console.log(erro);
        this.mensagem.tipo = "danger";
        this.mensagem.texto = "OOPS, THERE IS SOMETHING WRONG";
      }
    );
  }
}
