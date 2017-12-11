import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
	selector: "search-box",
	templateUrl: "./searchbox.component.html",
	styleUrls: ["./searchbox.component.scss"]
})
export class SearchBoxComponent implements OnInit {
	form = new FormGroup({
		search: new FormControl()
	});
	constructor() {}

	ngOnInit() {}
}
