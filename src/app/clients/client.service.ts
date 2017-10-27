import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClient } from './client';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { LocalStorageHelper} from '../shared/localStorageHelper';



import { AuthHttp } from 'angular2-jwt';



@Injectable()
export class ClientService {
    clients: IClient;
    headers: Headers;
    options: RequestOptions;
    testResponse:any;
    public token: string;

    private _clienttUrl = "http://localhost:4268/api/clientes/post";
    private _clienttUrl1 = "http://localhost:4268/api/clientes/login";
    private _clienttUrl2 = "http://localhost:4268/api/clientes/login";
    private _clienttUrl3 = "http://localhost:4268/api/clientes/getusuario";
    private _clienttUrl4 = "http://localhost:4268/api/clientes/getall";
    constructor(private _http: Http,private _localStorageHelper : LocalStorageHelper) {
        console.log("clients service");
        var clients  =   this._localStorageHelper.getObject('clients');
        console.log("clients",clients);
    }
    getClientes() {
        return this.clients;
    }
 
   
 

    putClients(clients: IClient) {
        return this._http.post(this._clienttUrl, clients)

            .map((Response: Response) => <Boolean>Response.ok)

            .subscribe();
    }

    LoginClients(clients: IClient){


        
        let headers: Headers = new Headers();
        let params : URLSearchParams= new URLSearchParams();
        try{
            //params.append('Email',clients.Email);
           // params.append('Password',clients.Password);
            headers.append("Authorization", "Basic " + btoa(clients.Email + ":" + clients.Password));
            headers.append("Content-Type", "application/x-www-form-urlencoded");
            

            this._http.get(this._clienttUrl3,{ headers:headers })
            .map((Response: Response) => <IClient>Response.json())
            .subscribe(clients=>{this.clients=clients;});
             
            
            if(this.clients!=null){
                this._localStorageHelper.saveObject('clients',this.clients);
                console.log("clients",this.clients);
            }else {console.log("usuario incorrecto")}
        }catch(q){
            console.log("Error")
        }
        return this.clients;
        //if(clients.Email.endsWith(".com")){
            
        
        
   // }
               
        
       
        //if (clients.Email == "admin" &&
         //   clients.Password == "adminPass") {
           // this.clients = clients;
           // this.clients.esAdmin = true;

       // }
       // return this.clients;

    }
    LoginClients3(clients: IClient){
           var abcd;
                let headers: Headers = new Headers();
                let params : URLSearchParams= new URLSearchParams();
                try{
                    
                   // headers.append("Authorization", "Basic " + btoa(clients.Email + ":" + clients.Password));
                  //  headers.append("Content-Type", "application/x-www-form-urlencoded");
                    params.append('Email',clients.Email);
                    params.append('Password',clients.Password);
        
                    this._http.get(this._clienttUrl2,{params:params})
                    .map((Response: Response) =><IClient>Response.json())
                    .subscribe(
                        data=>{this.clients=clients;
                        console.log("datos",data);
                    }
                        

                );
                     
                if(this.clients!=null){
                    this._localStorageHelper.saveObject('clients',clients);
                    
                    abcd=this.clients;
                    console.log("logueado",clients)
                
                }else {
                    console.log("usuario incorrecto",this.clients)
                    this._localStorageHelper.removeItem('clients');
                    }                  
                    
                
                    
                }catch(q){
                    console.log("Error");
                }
                
                return abcd;
                }
    LoginClients2(clients: IClient) {
        this.clients = null;
        
        let headers: Headers = new Headers();
        if(clients.Email.endsWith(".com")) {
            headers.append("Authorization", "Basic " + btoa(clients.Email + ":" + clients.Password));
            headers.append("Content-Type", "application/x-www-form-urlencoded");

            

            return this.clients, this._http.get(this._clienttUrl2, { headers: headers })
            .map((Response: Response) => <IClient>Response.json())
                
  .subscribe(clients => {this.clients=clients;}
                );
            
            }
                
                   
                }
                

  

  
    private handleError(error: Response) {


        console.log("error", error);
        return Observable.throw(error.json().error || "server error");
    }


    logout(): void {
        this.clients = null;
        this._localStorageHelper.removeItem('clients');
    }


    //call(url): Observable<any> {
    //  let username: string = 'username';
    //  let password: string = 'password';
    // let headers: Headers = new Headers();
    //  headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    //  headers.append("Content-Type", "application/x-www-form-urlencoded");
    //  return this._http.post(url, data, {headers: headers})
    //  }
}