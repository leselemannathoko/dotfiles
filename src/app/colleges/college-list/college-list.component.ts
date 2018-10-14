import { Component, OnInit } from '@angular/core';

import {CollegeService } from '../shared/college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
