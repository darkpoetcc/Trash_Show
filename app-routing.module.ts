import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelshopJobComponent } from './components/panelshop-job/panelshop-job.component';


const routes: Routes = [
  {
    path: 'panelshop', component: PanelshopJobComponent
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
