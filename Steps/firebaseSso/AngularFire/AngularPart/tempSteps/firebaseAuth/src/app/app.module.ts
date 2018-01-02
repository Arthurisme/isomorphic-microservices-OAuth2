import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import {AngularFireModule} from 'angularfire2';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(yourConfig),
    CoreModule, // <-- add core module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
