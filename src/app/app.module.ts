import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConversionLogicService} from './conversion-logic.service';
import { AppComponent } from './app.component';
import { IntegerToRomanComponent } from './integer-to-roman/integer-to-roman.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegerToRomanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConversionLogicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
