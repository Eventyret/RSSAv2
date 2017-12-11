import { SearchService } from "./../../../services/search.service";
import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
	selector: "search-results",
	templateUrl: "./searchresults.component.html",
	styleUrls: ["./searchresults.component.scss"]
})
export class SearchresultsComponent implements OnChanges {
	@Input("results") results: any[];

	constructor() {}

	ngOnChanges() {
		console.log(this.results);
	}
}
