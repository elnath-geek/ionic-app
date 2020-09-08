import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  set appHighlight(condition: boolean){
    this.el.nativeElement.style.background = condition ? 'yellow' : null;
  }
  constructor(private el:ElementRef) { }

}