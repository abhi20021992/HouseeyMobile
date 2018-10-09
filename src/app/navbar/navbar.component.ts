import { Component, OnInit } from '@angular/core';
//import { AfterViewInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

//Modal Component
import { LoginComponent } from '../login/login.component'
import { NewsComponent } from '../news/news.component'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  //@ViewChild(LoginComponent)
  //private loginComponent : LoginComponent;

  closeResult: string;
  cities = null;
  isCollapsed:any = "true";
  selectedCityName = "Bangalore";
 
  constructor(private modalService: NgbModal) { 
  	this.cities = [  
    		{
    			name:"Bngalore",
    			id:"1",
    			selected: "false"
    		},
    		{
    			name:"Mumbai",
    			id:"3",
    			selected: "false"
    		},
    		{
    			name:"Chennai",
    			id:"2",
    			selected: "false"
    		},
    		{
    			name:"Gurgaon",
    			id:"7",
    			selected: "false"
    		}
    	];
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

   private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  open(type:string){

    this.modalService.open((type==="news"?NewsComponent:LoginComponent),{backdropClass: 'modal-backdrop'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
