import { Component } from "@angular/core";
import { FotoService } from "../services/foto.serivce";
import { FotoComponent } from "../foto/foto.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-listagem",
  templateUrl: "./listagem.component.html",
  styleUrls: ["./listagem.component.css"]
})
export class ListagemComponent {
  title = "Caelum Pic";
  listaFotos: FotoComponent[];

  constructor(private servico: FotoService) {
    this.servico.listar().subscribe(fotosApi => this.listaFotos = fotosApi);
  }

  apagar(foto: FotoComponent) {
    this.servico.deletar(foto).subscribe(() => {
      console.log(`${foto.titulo} apagada com sucesso`)
      this.listaFotos = this.listaFotos.filter( fotoDaLista => {
         return fotoDaLista != foto;
      })
    }, () => {

    });
  }
}
