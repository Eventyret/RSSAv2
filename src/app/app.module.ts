import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const appRoutes: Routes = [
{ path: "", component: SearchPageComponent },
{ path: "page-not-found", component: PageNotFoundComponent}
 /* { path: "info", component: InfoViewComponent },
  { path: "**", component: PageNotFoundComponent } */
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent,
    PageNotFoundComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
