import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  v1 = "Welcome to Home Page";
  v2 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  v3 = false;
  fn(){
    alert("button is clicked");
  }
  v4 = "Hadil";
}
