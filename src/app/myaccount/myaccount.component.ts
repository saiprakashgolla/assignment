import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
//import { SubmitAddService } from '../submitAdd.service';


export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class MyaccountComponent implements OnInit {

  // constructor(private submitservice:SubmitAddService) { }

   ngOnInit() {
  //   this.submitservice.getsubmitDetils(data)

  // .subscribe(
  //   (response)=>console.log(response)
  // )
  // }


}
}
