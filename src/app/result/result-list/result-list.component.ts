import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Result } from '../result.model';
import { resultService} from '../result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  results : Result[];

  constructor(
    private resultservice: resultService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   }

  ngOnInit() {
    this.results = this.resultservice.getResults();
  }

}
