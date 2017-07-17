import { Component, OnInit, Input } from '@angular/core';
import { Career } from '../../career.model';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss']
})
export class CareerItemComponent implements OnInit {

  @Input() career : Career;

  constructor() { }

  ngOnInit() {
  }

}
