import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];
  currentDate = new Date();
  defaultStatus = 'EN ATTENTE';
  
  isEditMode = false;
  suggestionId: string | null = null;  // ← Changer de number à string

  constructor(
    private fb: FormBuilder,
    private suggestionService: SuggestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    
    // Récupérer l'ID (string) depuis l'URL
    this.route.params.subscribe(params => {
      console.log('Params:', params);
      const id = params['id'];
      
      if (id) {
        this.isEditMode = true;
        this.suggestionId = id;
        console.log('Mode édition - ID:', this.suggestionId);
        this.loadSuggestion();
      }
    });
  }

  initForm() {
    this.suggestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required]
    });
  }

  loadSuggestion() {
    if (!this.suggestionId) return;
    
    this.suggestionService.getSuggestionById(this.suggestionId).subscribe({
      next: (response) => {
        console.log('Réponse:', response);
        const suggestion = response.suggestion || response;
        
        if (suggestion) {
          this.suggestionForm.patchValue({
            title: suggestion.title,
            description: suggestion.description,
            category: suggestion.category
          });
          if (suggestion.date) this.currentDate = new Date(suggestion.date);
          if (suggestion.status) this.defaultStatus = suggestion.status;
        }
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.router.navigate(['/suggestions']);
      }
    });
  }

  get title() { return this.suggestionForm.get('title'); }
  get description() { return this.suggestionForm.get('description'); }
  get category() { return this.suggestionForm.get('category'); }

  submitSuggestion(): void {
    if (this.suggestionForm.invalid) return;

    if (this.isEditMode && this.suggestionId) {
      this.suggestionService.updateSuggestion(this.suggestionId, this.suggestionForm.value).subscribe({
        next: () => this.router.navigate(['/suggestions']),
        error: (error) => console.error('Erreur update:', error)
      });
    } else {
      this.suggestionService.addSuggestion(this.suggestionForm.value).subscribe({
        next: () => this.router.navigate(['/suggestions']),
        error: (error) => console.error('Erreur add:', error)
      });
    }
  }
}