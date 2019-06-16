import { Component, Input, NgModule } from '@angular/core';

import { ButtonModule } from './button.directive';

@Component({
  selector: 'app-zippy',
  template: `
    <button appButton (appClick)="onToggle()">
      {{label}}
    </button>

    <div [hidden]="!isExpanded">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  label = 'Toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}

@NgModule({
  declarations: [ZippyComponent],
  exports: [ZippyComponent],
  imports: [
    ButtonModule,
  ],
})
export class ZippyModule {}
