import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { LogoFooterComponent } from './components/logo-footer/logo-footer.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoHeaderComponent,
    LogoFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoHeaderComponent,
    LogoFooterComponent
  ]
})
export class SharedModule { }
