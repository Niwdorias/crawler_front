import { Component } from '@angular/core';
import { SearchService, UrlListResponse } from 'src/app/Services/search.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor (private searchService: SearchService){}

  UrlList!: UrlListResponse[];
 
  
  ngOnInit(){
    this.getUrlsList();
  }
  getUrlsList(){

    this.searchService.getUrls().subscribe((res:any)=> {
      console.log(res);

      this.UrlList = res
      
     
      
      
      
      
      
    });
  }

}
