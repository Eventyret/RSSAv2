import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RadarrService {
	private RADARR_KEY: string = environment.RADARR_KEY;
	private RADAR_URL: string = environment.RADARR_URL;
	private RADAR_STRING: string = "?apikey=" + this.RADARR_KEY;

	constructor(private http: Http) {}

	getResultsFromRadarr(){
		return this.http.get(this.RADAR_URL + this.RADAR_STRING)
		.map(res => res.json());
	}
}
