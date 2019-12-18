import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelshopJobComponent } from './components/my-cva/my-cva.component';


const routes: Routes = [
  {
    path: 'mycva', component: MyCvaComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
