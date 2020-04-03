import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {
  
  studentmodel:Student = new Student("",0,0,"","");
  __service:MyServiceService;
  constructor(__service:MyServiceService) { 
    this.__service=__service;
  }

  ngOnInit(): void {
    
  }
  addStudent(){
    this.__service.addStudent(this.studentmodel);
    //alert("done");
    this.studentmodel = new Student("",0,0,"","");
  }

}
