import { RadarrService } from './../../../services/radarr.service';
import { Component, Input, OnChanges, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
	selector: "search-results",
	templateUrl: "./searchresults.component.html",
	styleUrls: ["./searchresults.component.scss"]
})
export class SearchresultsComponent implements OnChanges, AfterViewInit {
	@Input("results") results: any[];
	radarResults: any[];
	movies: Object;

	constructor(private radarr: RadarrService) {}

	ngOnChanges() {
		console.log(this.results);
	}
	getResults() {
		return this.radarr.getResultsFromRadarr().subscribe(data => {
			this.radarResults = data;
			this.movies = {};
			for (const movie of this.radarResults) {
				this.movies[movie.imdbId] = movie;
			}
			console.log(this.movies);
		});
	}
	ngAfterViewInit(){
		this.getResults();
	}
}
