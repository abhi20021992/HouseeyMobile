import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable} from 'rxjs'
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

const searchData = [];


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`.card a{ color: white; }`],
  styleUrls: ['./search.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class SearchComponent implements OnInit {
  
  public model: any;

  formatter = (result: string) => result.toUpperCase();
  clickedItem:string;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : searchData.filter(v => v.PN.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private _dataService : DataService , public activeModal: NgbActiveModal, public config: NgbAccordionConfig, public typeAheadConfig:NgbTypeaheadConfig) {
  	 	config.closeOthers = true;
    	config.type = 'info'
  }

  private formatData(data){
      searchData.push({
        type: "Valmark",
        name: "Valmark Aastha"
      });
  }

  ngOnInit() {
    this._dataService.getSearchData().subscribe(
      data => { 
        this.formatData(data);  
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  selectedItem(item){
     this.clickedItem = item.item;
    console.log(this.clickedItem);
  }

  
}
