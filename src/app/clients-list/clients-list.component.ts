
import { Component, OnInit } from '@angular/core'; 
import { Client } from '../model/client'; 
import { ClientServiceService } from '../service/client-service.service'; 
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent implements OnInit{

  clients!:Client[];
   constructor(private clientservice:ClientServiceService) { } 
 
  ngOnInit(): void { 
 
      this.clientservice.AfficherClients().subscribe(data=>{this.clients=data;});
      }}
 

