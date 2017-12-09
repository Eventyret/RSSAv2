import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { MovieQuotesService } from "./services/movie-quotes.service";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
{ path: "", component: SearchPageComponent },
 /* { path: "info", component: InfoViewComponent },
  { path: "404-not-found", component: PageNotFoundComponent}
  { path: "**", component: PageNotFoundComponent } */
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	HttpClientModule
  ],
  providers: [
	  MovieQuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
