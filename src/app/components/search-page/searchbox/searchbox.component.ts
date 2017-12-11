import { SearchService } from "./../../../services/search.service";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "search-box",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"]
})
export class SearchBoxComponent {
	omdbMovies: any[];

	// Form Control
	form = new FormGroup({
		search: new FormControl("", Validators.required)
	});

	get search() {
		return this.form.get("search");
	}
	constructor(private omdbSearch: SearchService ) {}

	searchMovies(query: string) {
		this.omdbSearch.onlineSearch(query);
		console.log("You searched for something");
	}
	handleSuccess(data) {
		this.omdbMovies = data.Search;
	}
}
