import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  public num;
  student = {
    idNum: 0,
   name : '',
    class : '',
  
  }
  constructor(
    private route : ActivatedRoute
  ) { }

  students =  [
    {
      num: 1,
      idNum : 480,
      name : 'sai',
      class : 'x',

    },
    {
      num: 2,
      idNum : 481,
      name : 'prakash',
      class : 'V',

    },
    {
      num: 3,
      idNum : 482,
      name : 'vipin',
      class : 'VII',

    },
    {
      num: 4,
      idNum : 484,
      name : 'sukumar',
      class : 'III',

    },
  ]

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.num = params['num'];
      console.log(this.num);
    })
   this.filter();
  }

 

  filter(){
    for(var i=0;i<this.students.length ; i++){
      if(this.num == this.students[i].num){
        this.student.idNum = this.students[i].idNum;
        this.student.name = this.students[i].name;
        this.student.class = this.students[i].class;
     
        
      };
    }
  }

}
