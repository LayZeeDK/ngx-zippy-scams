import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizeModule } from './capitalize.pipe';
import { ZippyModule } from './zippy.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CapitalizeModule,
    ZippyModule,
  ],
})
export class AppModule {}
