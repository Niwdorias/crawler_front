import { Component } from '@angular/core';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-new-url-search',
  templateUrl: './new-url-search.component.html',
  styleUrls: ['./new-url-search.component.css']
})
export class NewUrlSearchComponent {

  constructor(private searchService: SearchService){}

  url!: string
  depth!: number

  isLoading: boolean = false;
  loadingTitle: string = 'Loading Data';
  errors: any = [];

  newSearch(){

    this.isLoading = true;
    this.loadingTitle = 'Querying Data';
    var inputData = {
      url: this.url,
      depth: this.depth
    }
    this.searchService.newSearch(inputData).subscribe({
      next: (res: any) =>{

        console.log(res, 'response')
        
        alert(res.massage);
        this.url = '';
        this.depth = 0;
        
        this.isLoading = false;
      },
      error: (err: any) => {
        
        this.errors = err.error.errors;
        this.isLoading = false;
        console.log(err.error.errors, 'errors')
      }

    });
  }

}
