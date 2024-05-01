
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client} from '../model/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { 
  }
  public AfficherClients(): Observable<Client[]> {
    return this.http.get <Client[]>("http://localhost:8080/Digitalbancking/clients");

  } 
}
