import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorynamesComponent } from './categorynames/categorynames.component';
import { FooterComponent } from './footer/footer.component';






const routes: Routes = ([



  {
    path: 'categories', component: CategoriesComponent,

     children: [
     { path : ':id', component : CategorynamesComponent }
     ]
  },

    
  

])

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NavbarComponent,
    FooterComponent,
    CategorynamesComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule.forRoot(),
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
