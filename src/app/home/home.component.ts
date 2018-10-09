import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private _dataService : DataService, private modalService: NgbModal) { }
   closeResult: string;
  ngOnInit() {
  	this._dataService.getSearchData().subscribe(
      data => { console.log(data)},
      err => console.error(err),
      () => console.log('done loading foods')
    );
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

    this.modalService.open(SearchComponent,{backdropClass: 'modal-backdrop'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
