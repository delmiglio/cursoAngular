import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  // foto = new FotoComponent()
  foto = {
    titulo: "",
    url: "",
    descricao: ""
  };
  mensagem = {
    tipo: "",
    texto: ""
  };

  constructor(private conexaoApi: HttpClient) {}

  ngOnInit() {}

  salvar() {
    this.conexaoApi.post("http://localhost:3000/v1/fotos", this.foto).subscribe(
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
