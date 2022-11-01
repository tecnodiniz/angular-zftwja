import { Component, Input} from '@angular/core';

@Component({
  selector: 'entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent {
  @Input() text:string;
 
  typing(){
    alert('ligado')
  }

}