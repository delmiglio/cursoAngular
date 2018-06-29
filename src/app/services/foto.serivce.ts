import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
const urlBase = 'http://localhost:3000/'; 

@Injectable({
    providedIn: 'root'
})
export class FotoService{
    private url = `${urlBase}v1/fotos/`;
    private cabecalho = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    // Injetar o HTTPCLIENT
    constructor(private conexaoApi: HttpClient){

    }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url);        
    }

    cadastrar(foto: FotoComponent){
        return this.conexaoApi.post(this.url,foto,this.cabecalho);
    }
    deletar(foto: FotoComponent): Observable<FotoComponent[]>{
        return this.conexaoApi.delete<FotoComponent[]>(`${this.url + foto._id}`,this.cabecalho);
    }
    alterar(foto: FotoComponent): Observable<FotoComponent>{
        return this.conexaoApi.put<FotoComponent>(`${this.url + foto._id}`,foto,this.cabecalho);
    }
    pesquisar(fotoId: string) : Observable<FotoComponent>{
        return this.conexaoApi.get<FotoComponent>(`${this.url + fotoId}`, this.cabecalho);
    }
}