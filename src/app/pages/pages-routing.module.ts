import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedimirComponent } from './redimir/redimir.component';
import { RuletaComponent } from './ruleta/ruleta.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ruleta', component: RuletaComponent},
  {path: 'redimir', component: RedimirComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
