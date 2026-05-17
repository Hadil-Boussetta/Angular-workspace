import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SugNFComponent } from './suggestions/sug-nf/sug-nf.component';
import { SuggestionFormComponent } from './suggestions/suggestion-form/suggestion-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'suggestions', loadChildren: () => import('./suggestions/suggestion-m/suggestion-m.module').then(m => m.SuggestionMModule) },
  { path: 'home', component: HomeComponent },
  { path: 'suggestionForm', component: SuggestionFormComponent },
  { path: 'suggestionForm/edit/:id', component: SuggestionFormComponent },
  { path: 'userForm', component: UserFormComponent },
  { path: '**', component: SugNFComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }