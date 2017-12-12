import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RadarrService {
	private URL: string = environment.RADARR_URL;
	private KEY: string = environment.RADARR_KEY;
	private STRING: string = "?apikey=" + this.KEY;

	constructor(private http: Http) {}

	getResultsFromRadarr() {
		return this.http.get(this.URL + this.STRING).map(res => res.json());
	}
}
