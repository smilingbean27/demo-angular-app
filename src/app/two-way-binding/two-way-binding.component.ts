import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {

  @Input() fontSize: number = 16;

  @Output() fontSizeChange = new EventEmitter<number>();

  increase(){ this.resize(+1)};
  decrease(){ this.resize(-1)};

  resize(val: number){
     this.fontSize = Math.min(40, Math.max(8, this.fontSize + val))
     this.fontSizeChange.emit(this.fontSize);
  }

}
