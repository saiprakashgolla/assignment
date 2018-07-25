import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  public id;

  constructor(
  ) { }

  students =  [
    {
        num: 1,
        id : 480,
        name : 'sai',
        class : 'x',
  
      },
      {
        num: 2,
        id : 481,
        name : 'prakash',
        class : 'V',
  
      },
      {
        num: 3,
        id : 482,
        name : 'vipin',
        class : 'VII',
  
      },
      {
        num: 4,
        id : 484,
        name : 'sukumar',
        class : 'III',
  
      },
  ]

  ngOnInit() {
  
  }


}
