import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../suggestions/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  suggestionurl = "http://localhost:3000/suggestions"

  constructor(private http: HttpClient) { }

  getAllSuggestions() {
    return this.http.get<Suggestion[]>(this.suggestionurl);
  }

  // ID est une string maintenant
  getSuggestionById(id: string) {
    return this.http.get<any>(`${this.suggestionurl}/${id}`);
  }

  addSuggestion(suggestion: any) {
    return this.http.post<Suggestion>(this.suggestionurl, suggestion);
  }

  // ID est une string
  deleteSuggestion(id: string) {
    return this.http.delete(`${this.suggestionurl}/${id}`);
  }

  // ID est une string
  updateSuggestion(id: string, suggestion: any) {
    return this.http.put<Suggestion>(`${this.suggestionurl}/${id}`, suggestion);
  }
}