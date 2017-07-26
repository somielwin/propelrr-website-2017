import { Component, OnInit } from '@angular/core';
import { Result } from './result.model';

import { resultService } from './result.service';

@Component({
  selector: 'app-result',
  host: {'class':'result'},
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [resultService]
})
export class ResultComponent implements OnInit {
  resultSelected: Result;

  constructor( private resultItem : resultService) {

  }

  ngOnInit() {
    this.resultItem.resultSelected
      .subscribe(
        (results : Result) => {
          this.resultSelected = results;
        }
      )
  }

}
