import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { College} from './college.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  collegeList: AngularFireList<any>;
  selectedCollege: College = new College();
  constructor(private firebase : AngularFireDatabase) { }
  getData(){
    this.collegeList = this.firebase.list('colleges');
    return this.collegeList;
  }

  insertCollege(college : College)
  { 
    this.collegeList.push({
    name : college.name,
    address : college.address,
    standNumber : college.standNumber
    });
  }

  updateCollege(college : College){
    this.collegeList.update(college.$key,
    {
      name : college.name,
      address : college.address,
      standNumber : college.standNumber
    });
  }
  
  deleteCollege($key : string){
    this.collegeList.remove($key);
  }
}
