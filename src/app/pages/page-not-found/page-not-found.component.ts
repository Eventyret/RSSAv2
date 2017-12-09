import { MovieQuotesService } from "./../../services/movie-quotes.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent implements OnInit {
	quotes: any[];

  constructor(private service: MovieQuotesService) { }

  ngOnInit(){
	  this.service.getQuotes()
	  .subscribe(response => {
		  this.quotes = response.json();
		  console.log(this.quotes);
	  });
  }

}
