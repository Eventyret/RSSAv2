import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { MovieQuotesService } from "./services/movie-quotes.service";
import { HttpModule } from "@angular/http";
import { InfoPageComponent } from "./pages/info-page/info-page.component";
import { SearchBoxComponent } from "./components/search-page/searchbox/searchbox.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const appRoutes: Routes = [
{ path: "", component: SearchPageComponent },
{ path: "not-found", component: PageNotFoundComponent},
 { path: "info", component: InfoPageComponent },
 /* { path: "**", component: PageNotFoundComponent } */
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent,
    PageNotFoundComponent,
    InfoPageComponent,
    SearchBoxComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	HttpModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
	  MovieQuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
