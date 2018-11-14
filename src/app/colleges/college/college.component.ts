import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { CollegeService } from '../shared/college.service';
//import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private collegeservice : CollegeService ) { }

  ngOnInit() {
   
    this.resetForm();
  }

  onSubmit(collegeForm : NgForm){
   this.collegeservice.insertCollege(collegeForm.value);
   this.resetForm(collegeForm);
   //this.tostr.success('Summited Successfully','College List');
  }

  resetForm(collegeForm? : NgForm){
    if(collegeForm != null)
    collegeForm.reset();
    this.collegeservice.selectedCollege ={
      $key : null,
      name : '',
      address : '',
      standNumber : 0
  
    }
  }
 
}
