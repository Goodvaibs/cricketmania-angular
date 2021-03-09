import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//services
import { DynamicScriptLoaderServiceService } from './Core/services/dynamic-script-loader-service.service'
import { SubheaderService } from './core/services/subheader.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DynamicScriptLoaderServiceService,SubheaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
