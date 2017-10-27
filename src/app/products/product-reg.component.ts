import { Component, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router'
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
    templateUrl: './product-reg.component.html',
  
    providers:[ProductService]
    
})

export class ProductRegComponent{

}