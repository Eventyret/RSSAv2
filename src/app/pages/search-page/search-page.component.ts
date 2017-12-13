import { Component } from "@angular/core";

@Component({
	selector: "app-search-page",
	templateUrl: "./search-page.component.html",
	styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent {
	results: any[];
	isLoading = true;
	constructor() {}

	onResultsEmitted(event) {
		this.results = event;
	}

	onLoadEmitted(event) {
		this.isLoading = false;
	}
}
