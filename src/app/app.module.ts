import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SugNFComponent } from './suggestions/sug-nf/sug-nf.component';
import { SuggestionMModule } from './suggestions/suggestion-m/suggestion-m.module';
import { SuggestionFormComponent } from './suggestions/suggestion-form/suggestion-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SugNFComponent,
    SuggestionFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SuggestionMModule,
   //methode2 HttpClientModule
   
  ],

  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
