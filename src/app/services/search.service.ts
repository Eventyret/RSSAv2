import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { environment } from "../../environments/environment";


@Injectable()
export class SearchService {
	/**
	 * Variables for
	 */
	private query: string;
	private imdbID: string;
	private OMDB_KEY: string = environment.OMDB_KEY;
	private OMDB_URL: string = environment.OMDB_URL;
	private OMDB_STRING: string = "&apikey=" + this.OMDB_KEY;
	private RADARR_KEY: string = environment.RADARR_KEY;
	private RADAR_URL: string = environment.RADARR_URL;
	private RADAR_STRING: string = "?apikey=" + this.RADARR_KEY;
	results$: Observable<any>;

	constructor(private http: Http) {}

	onlineSearch(query) {
		return this.http
			.get(this.OMDB_URL + "?s=" + query + this.OMDB_STRING +	"&type=movie")
			.map(res => res.json());
	}
}
