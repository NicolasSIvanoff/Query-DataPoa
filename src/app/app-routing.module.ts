import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBusComponent } from './data-poa/components/page-bus/page-bus.component';

const routes: Routes = [
  { path: '', component: PageBusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
