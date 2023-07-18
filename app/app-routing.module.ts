import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pagess/contact/contact.component';

import { ProductsComponent } from './pagess/products/products.component';
const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
