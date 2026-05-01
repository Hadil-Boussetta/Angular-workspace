import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent {
  searchTerm: string = '';
  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  get filteredSuggestions(): Suggestion[] {
    if (!this.searchTerm.trim()) {
      return this.suggestions;
    }
    const term = this.searchTerm.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.category.toLowerCase().includes(term)
    );
  }

  like(suggestion: Suggestion) {
    suggestion.nbLikes++;
  }

  addToFavorites(suggestion: Suggestion) {
    if (!this.favorites.find(f => f.id === suggestion.id)) {
      this.favorites.push(suggestion);
      alert(`✅ Ajouté aux favoris : ${suggestion.title}`);
    } else {
      alert('⚠️ Déjà dans les favoris !');
    }
  }

  isRefused(suggestion: Suggestion): boolean {
    return suggestion.status === 'refusee';
  }
}