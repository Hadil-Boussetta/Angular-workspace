import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../suggestions/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
suggestionurl="http://localhost:3000/suggestions"
  constructor(private http: HttpClient) { }

getAllSuggestions(){
  return this.http.get<Suggestion[]>(this.suggestionurl);
}

getSuggestionById(id:number){
  // return this.http.get<Suggestion>(`${this.suggestionurl}/${id}`);
  return this.http.get<any>(this.suggestionurl+'/'+id);
}
addSuggestion(suggestion:Suggestion){
  return this.http.post<Suggestion>(this.suggestionurl, suggestion);
}

deleteSuggestion(id:number){
  //return this.http.delete(`${this.suggestionurl}/${id}`);
  return this.http.delete(this.suggestionurl+'/'+id);

}

updateSuggestion(id:number, suggestion:Suggestion){
  return this.http.put<Suggestion>(this.suggestionurl+'/'+id, suggestion);
}




}
