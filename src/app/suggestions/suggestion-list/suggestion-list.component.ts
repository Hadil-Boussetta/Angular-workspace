import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private suggestionService: SuggestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSuggestions();
  }

  loadSuggestions() {
    this.suggestionService.getAllSuggestions().subscribe({
      next: (data) => {
        console.log('Suggestions chargées:', data);
        this.suggestions = data;
      },
      error: (error) => console.error('Erreur:', error)
    });
  }

  likeSuggestion(s: Suggestion) {
    s.nbLikes = (s.nbLikes || 0) + 1;
    this.suggestionService.updateSuggestion(s.id, s).subscribe({
      next: () => console.log('Like mis à jour'),
      error: (error) => console.error('Erreur like:', error)
    });
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions(): Suggestion[] {
    if (!this.searchText) return this.suggestions;
    return this.suggestions.filter(s =>
      s.title?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // ID est maintenant une string
  editSuggestion(id: string) {
    console.log('Modification ID:', id);
    this.router.navigate(['/suggestionForm/edit', id]);
  }

  // ID est maintenant une string
  deleteSuggestion(id: string) {
    if (confirm('Supprimer cette suggestion ?')) {
      this.suggestionService.deleteSuggestion(id).subscribe({
        next: () => {
          console.log('Supprimé');
          this.loadSuggestions();
        },
        error: (error) => console.error('Erreur:', error)
      });
    }
  }
}