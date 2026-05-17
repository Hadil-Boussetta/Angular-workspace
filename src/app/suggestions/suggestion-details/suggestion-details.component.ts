import { Suggestion } from './../suggestion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | null = null;

  constructor(
    private ar: ActivatedRoute,
    private r: Router,
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      const id = params['id'];
      console.log('ID récupéré:', id);
      if (id) {
        this.loadSuggestion(id);
      }
    });
  }

  loadSuggestion(id: string): void {
    this.suggestionService.getSuggestionById(id).subscribe({
      next: (data) => {
        console.log('Suggestion reçue:', data);
        // Gérer les deux formats possibles de réponse
        this.suggestion = data.suggestion || data;
      },
      error: (error: any) => {
        console.error('Error loading suggestion:', error);
      }
    });
  }

  backToList() {
    this.r.navigate(['/suggestions']);
  }

  goToUpdate() {
    if (this.suggestion && this.suggestion.id) {
      this.r.navigate(['/suggestionForm/edit', this.suggestion.id]);
    }
  }
}