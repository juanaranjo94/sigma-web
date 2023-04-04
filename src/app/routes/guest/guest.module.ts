import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '@core/pipes/translate.pipe';

export function translateFactory(provider: TranslateService){
  return () => provider.getData();
}


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
