import { Component, Input } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {
  @Input() fotoObj: FotoComponent
  fotoDefault = 'http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'
}
