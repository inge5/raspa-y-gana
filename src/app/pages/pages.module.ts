import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RuletaComponent } from './ruleta/ruleta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedimirComponent } from './redimir/redimir.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    HomeComponent,
    RuletaComponent,
    RedimirComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
