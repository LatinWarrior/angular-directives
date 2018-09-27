import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  exports: [
    DropdownDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
