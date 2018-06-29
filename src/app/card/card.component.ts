import { Component, Input } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../services/foto.serivce";
const urlBase = 'http://localhost:3000/'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {

  constructor(private servico: FotoService){
    
  }
  
  private url = `${urlBase}v1/fotos`;
  @Input() fotoObj: FotoComponent;
  fotoDefault = 'http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'
  
  apagar(foto: FotoComponent){
      this.servico.deletar(foto).subscribe();
  }

  editar(foto: FotoComponent){

  }


}
