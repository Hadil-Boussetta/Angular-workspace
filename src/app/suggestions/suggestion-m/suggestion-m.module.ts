import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuggestionMRoutingModule } from './suggestion-m-routing.module';
import { SuggestionListComponent } from '../suggestion-list/suggestion-list.component';
import { SuggestionDetailsComponent } from '../suggestion-details/suggestion-details.component';


@NgModule({
  declarations: [SuggestionListComponent, SuggestionDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionMRoutingModule
  ]
})
export class SuggestionMModule { }
