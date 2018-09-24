import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  exports: [
    DropdownDirective,
    BasicHighlightDirective,
    BetterHighlightDirective
  ]
})
export class SharedModule { }
