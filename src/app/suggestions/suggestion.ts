export interface Suggestion {
  id: string;  
  title: string;
  description: string;
  category: string;
  date?: string;
  status?: string;
  nbLikes?: number;
}