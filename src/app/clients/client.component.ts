import { Component } from '@angular/core';
import { IClient } from './client';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { LocalStorageHelper} from '../shared/localStorageHelper';

@Component({
    templateUrl: './client.component.html'
})
export class ClientComponent {
    public pageTitle: string = 'Iniciar Sesión';
    clients: IClient;
    //clients: IClient[] = [];
    headers: Headers = new Headers();

    constructor(private _clientService: ClientService, private _router: Router,private _localStorageHelper : LocalStorageHelper) {
        this.clients = <IClient>{
            Email: "",
            Password: ""
        }


    }

    Ingresar()  {
     
var usuarioreg
=this._clientService.LoginClients3(this.clients)

     
      if (usuarioreg==null){
           alert("usuario no registrado");
        }
        else {
            alert("Logueado con exito");
            this._router.navigate(['welcome']);
           
        }

    }
    
    


    borrar(): void {
        
        this.clients.Email = "";
       this.clients.Password = "";
    }


}

