import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponentComponent } from './navigation-bar-component/navigation-bar-component.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationBarComponentComponent,BlogComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
