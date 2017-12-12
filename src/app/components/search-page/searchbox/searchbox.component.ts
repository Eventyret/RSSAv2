import { SearchService } from "./../../../services/search.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "search-box",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"]
})
export class SearchBoxComponent {
	@Output() ResultsEmitted = new EventEmitter<any>()
	// Form Control
	form = new FormGroup({
		search: new FormControl("", Validators.required)
	});

	get search() {
		return this.form.get("search");
	}
	constructor(private omdbSearch: SearchService) {}

	searchMovies(query: string) {
		return this.omdbSearch.onlineSearch(query).subscribe(data => {
			this.ResultsEmitted.emit(data.Search);
		});
	}
}
