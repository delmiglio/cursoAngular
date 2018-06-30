import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FotoService } from "../services/foto.serivce";
import { FotoComponent } from "../foto/foto.component";
import { ActivatedRoute, Router } from "@angular/router";
// import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();
  // foto = {
  //   titulo: "",
  //   url: "",
  //   descricao: ""
  // };
  mensagem = {
    tipo: "",
    texto: ""
  };

  constructor(
    private servico: FotoService,
    private rotaAtiva: ActivatedRoute,
    private roteador: Router
  ) {
    let fotoId = this.rotaAtiva.snapshot.params.fotoId;

    if (fotoId) {
      this.servico
        .pesquisar(fotoId)
        .subscribe(fotoApi => (this.foto = fotoApi));
    }
    // this.rotaAtiva.params.subscribe(parametrosRota => {
    //   this.servico.pesquisar(parametrosRota.fotoId).subscribe(fotoApi => this.foto = fotoApi);
    // })
  }

  ngOnInit() {}

  salvar() {
    if (this.foto._id) {
      // Editar
      this.servico.alterar(this.foto).subscribe(
        resposta => {
          this.mensagem.texto = `${this.foto.titulo} editado com sucesso`;
          this.mensagem.tipo = "success";
          setTimeout(() => this.roteador.navigate([""]),4000);
        },
        erro => {
          console.log(erro);
          this.mensagem.tipo = "danger";
          this.mensagem.texto = "OOPS, THERE IS SOMETHING WRONG";
        }
      );
    } else {
      this.servico.cadastrar(this.foto).subscribe(
        resposta => {
          this.mensagem.texto = `${this.foto.titulo} cadastrada com sucesso`;
          this.mensagem.tipo = "success";
          setTimeout(() => this.roteador.navigate([""]),4000);
          
        },
        erro => {
          console.log(erro);
          this.mensagem.tipo = "danger";
          this.mensagem.texto = "OOPS, THERE IS SOMETHING WRONG";
        }
      );
    }
  }
}
