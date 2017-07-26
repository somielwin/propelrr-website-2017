import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../result.model';

@Component({
  selector: 'app-result-item',
  host: {'class':'result-item'},
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() result : Result;
  @Input() id : number;

  constructor() { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.resultItem.resultSelected.emit(this.result);
  // }
}
