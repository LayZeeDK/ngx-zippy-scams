import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy.component';
import { ButtonDirective } from './button.directive';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ButtonDirective,
    CapitalizePipe,
    ZippyComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule {}
