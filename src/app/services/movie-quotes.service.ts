import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieQuotesService {
	private url = "https://bella.digitalfairytales.net/api/1.1/tables/moviequotes/rows";
	constructor(private http: Http) {}

	getQuotes() {
		return this.http.get(this.url);
	}
}
