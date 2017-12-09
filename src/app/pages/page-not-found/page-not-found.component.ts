import { MovieQuotesService } from "./../../services/movie-quotes.service";
import { Component, OnInit } from "@angular/core";
import "rxjs/operators/map";

@Component({
	selector: "app-page-not-found",
	templateUrl: "./page-not-found.component.html",
	styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent implements OnInit {
	quotesArray: any[];

	constructor(private service: MovieQuotesService) {}

	ngOnInit() {}

	getData() {
		this.service.getQuotes().subscribe(resp => {
			this.quotesArray = resp.data;
			console.log(this.quotesArray);
		});
	}
	quotes() {
		const text = "Saddle Up Cowboy";
	}
}
