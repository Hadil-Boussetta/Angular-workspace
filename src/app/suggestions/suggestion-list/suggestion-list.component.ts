import { Component } from '@angular/core';
import { Suggestion } from '../suggestion';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css'
})
export class SuggestionListComponent {

suggestions: Suggestion[] = [];
favorites: Suggestion[] = [];
  searchText: string = "";

constructor(private suggestionService: SuggestionService) {}

  ngOnInit() {
    this.suggestionService.getAllSuggestions().subscribe((data) => {
      this.suggestions = data;
    });
  }


  // LIKE
  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  // FAVORIS
  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  // FILTRE
  filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}

