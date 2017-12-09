import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";

const appRoutes: Routes = [
/*   { path: "", component: SearchPageComponent },
  { path: "info", component: InfoViewComponent },
  { path: "404-not-found", component: PageNotFoundComponent}
  { path: "**", component: PageNotFoundComponent } */
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
