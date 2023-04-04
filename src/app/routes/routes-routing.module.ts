import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{
  path: '',  //http://localhost:4200/guest
  children: [
    {
      path: '',
      loadChildren: () => import ('./guest/guest.module').then((m) => m.GuestModule) //'m' de module
      
    }
  ]
},
{
  path: 'user',  //http://localhost:4200/user
  children: [
    {
      path: '',
      loadChildren: () => import ('./guest/guest.module').then((m) => m.GuestModule) //'m' de module
      
    }
  ]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
