import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './components/consignment/consignment.component';

const routes: Routes = [
 {
  path:'consignment',
 component:ConsignmentComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
