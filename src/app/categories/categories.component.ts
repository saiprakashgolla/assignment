import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

 

  ngOnInit() {
    
  }
  categories = [
    {
      id : 1,
      images : './assets/images/properties/properties.png',
      categoryName : 'Properties',
      categoryImages:  
      [
        {image:'./assets/images/properties/sale.png',name:'For Sale'},
        {image:  './assets/images/properties/rent.png',name:'For Rent'},
        {image: './assets/images/properties/projects.png',name:'New Projects'}
     ],
      
    },
    {
      id : 2,
      images : './assets/images/cars/cars.png',
      categoryName : 'Cars',
      categoryImages:  
      [
        {image:'./assets/images/cars/car.png',name:'Cars'},
        {image:  './assets/images/cars/truck.png',name:'Commercial & Vehicles'},
        {image: './assets/images/cars/vehicle.png',name:'Other Vehicles'},
        {image: './assets/images/cars/spare.png',name:'Spare Parts'}
     ],
      
    },
    {
      id : 3,
      images : './assets/images/electronics/electronics.png',
      categoryName : 'Electronics & Appliances',
      categoryImages:  
      [
        {image:'./assets/images/electronics/computer.png',name:'Computer & Laptops'},
        {image:  './assets/images/electronics/tv.png',name:'TVs, Video & Audio'},
        {image: './assets/images/electronics/harddisk.png',name:'Hard Disk, Printer & Moniters'},
        {image: './assets/images/electronics/ac.png',name:'ACs'},
        {image: './assets/images/electronics/washing.png',name:'Washing Machines'},
        {image: './assets/images/electronics/fridge.png',name:'Fridges'},
        {image: './assets/images/electronics/laptop.png',name:'Computer Accessoris'}
        
     ],
      
    },
    {
      id : 4,
      images : './assets/images/furniture/furniture.png',
      categoryName : 'Furniture',
      categoryImages:  
      [
        {image:'./assets/images/furniture/sofa.png',name:'Sofa & Dining'},
        {image:  './assets/images/furniture/beds.png',name:'Beds & Wardrobes'},
        {image: './assets/images/furniture/home.png',name:'Home Deckor & Garden'},
        {image: './assets/images/furniture/spoons.png',name:'Other Household'}
     ],
      
    },
    {
      id : 5,
      images : '../assets/images/jobs/jobs.png',
      categoryName : 'Jobs',
      categoryImages:  
      [
        {image:'./assets/images/jobs/dataentry.png',name:'Data entry'},
        {image:  './assets/images/jobs/bpo.png',name:'BPO & Telecaller'},
        {image: './assets/images/jobs/oparator.png',name:' Operator & Technician'},
        {image: './assets/images/jobs/sales.png',name:'Sales'},
        {image: './assets/images/jobs/cook.png',name:'Cook'},
     ],
      
    },
    {
      id : 6,
      images : './assets/images/mobiles/mobiles.png',
      categoryName : 'Mobiles',
      categoryImages:  
      [
        {image:'./assets/images/mobiles/tablets.png',name:' Tablets'},
        {image:  './assets/images/mobiles/accessories.png',name:'Accessories'},
        {image: './assets/images/mobiles/phones.png',name:'Mobile Phones'},

     ],
      
    },

  ]
  



}
