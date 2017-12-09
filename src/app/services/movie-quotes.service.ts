import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieQuotesService {
	constructor(private http: Http) {}

	quotes: Object;
	getQuotes() {
		this.http.get("https://bella.digitalfairytales.net/api/1.1/tables/moviequotes/rows")
		.subscribe(response => console.log(response.json()));
	}
}
