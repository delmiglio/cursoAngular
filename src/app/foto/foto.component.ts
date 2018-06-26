import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  template: `<img [src]="url" [alt]="titulo" class="img-fluid d-block mx-auto">`,
  styles: []
})

export class FotoComponent {
  @Input() titulo;
  @Input() url;
 }
