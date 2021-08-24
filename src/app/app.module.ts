import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { DataService } from './data.service';
import { SiblingComponent } from './sibling/sibling.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
