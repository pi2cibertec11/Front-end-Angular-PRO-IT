import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import {ProductRegComponent} from './product-reg.component';
import {ClienteGuard} from '../clients/client.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'productsreg', component: ProductRegComponent, canActivate:[ClienteGuard] },
        { path: 'products/:id',
          canActivate: [ ProductGuardService ],
          component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductRegComponent
  ],
  providers: [
    ProductService,
    ProductGuardService,
    ClienteGuard
  ]
})
export class ProductModule { }
