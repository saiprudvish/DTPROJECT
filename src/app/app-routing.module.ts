import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LEFIVEComponent } from './le-five/le-five.component';

const routes: Routes = [
  {path:'',component:LEFIVEComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
