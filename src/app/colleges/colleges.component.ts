import { Component, OnInit } from '@angular/core';

import {CollegeService} from './shared/college.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
