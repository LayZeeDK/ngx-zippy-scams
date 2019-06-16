import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-zippy label="Click me">
      {{title | capitalize}}
    </app-zippy>
  `,
})
export class AppComponent {
  title = 'view engine';
}
