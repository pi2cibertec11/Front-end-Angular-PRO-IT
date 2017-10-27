
import { Component, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IClient } from './client';
import { ClientService } from './client.service';


@Component({
    templateUrl: './client-reg.component.html',
    providers:[ClientService],
})
export class ClientRegComponent {
    public pageTitle: string = 'Crear Cuenta';
    errorMessage: string;
   

    clients: IClient;
    
    ngOnInit():void{
        this.clients=<IClient>{
            
            NombreCliente:"",
            ApellidosCliente:"",
            Email:"",
            TelefonoCliente:0,
            Password:"",     
            ConfirmPassword:"",
        }
       
    }

constructor(private _clientService:ClientService){

}

Registrar(){
    
   let respuesta= this._clientService.putClients(this.clients);
   console.log("respuesta",respuesta);
   
}
//RegistrarLog(){
    
  // let respuesta= this._clientService.putClientsLog(this.clients);
  // console.log("respuesta",respuesta);
   
//}


   
Mensaje(){
    console.log('click');
    
   
    
}




}




