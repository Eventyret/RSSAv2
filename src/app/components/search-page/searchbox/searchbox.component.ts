import { RadarrService } from './../../../services/radarr.service';
import { SearchService } from "./../../../services/search.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "search-box",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"]
})
export class SearchBoxComponent {
	@Output() ResultsEmitted = new EventEmitter<any>();
	@Output() RadarrResults = new EventEmitter<any>();
	@Output() LoadingEmitter = new EventEmitter<boolean>();
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
			this.LoadingEmitter.emit(true);
			this.ResultsEmitted.emit(data.Search);
		});
	}
}
