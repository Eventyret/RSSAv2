import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "search-box",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"]
})
export class SearchBoxComponent implements OnInit {
	form = new FormGroup({
		search: new FormControl("", Validators.required)
	});

	get search() {
		return this.form.get("search");
	}
	constructor() {}

	searchMovies(query: string) {
		return this.searchService.getMovies(query).subscribe(
			data => {
				this.handleSuccess(data);
			},
			error => {
				throw error;
			}
		);
	}

	ngOnInit() {}
}
