import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from './common/footer/footer.component';

const appRoutes: Routes = [
/*   { path: "", component: SearchPageComponent },
  { path: "info", component: InfoViewComponent },
  { path: "404-not-found", component: PageNotFoundComponent}
  { path: "**", component: PageNotFoundComponent } */
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
