import { Component, Input} from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styles: ['button{margin-top:10px}'],
})
export class ButtonComponent {
 @Input() buttonText:string
  
}
