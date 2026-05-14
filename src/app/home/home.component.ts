import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  v1="bonjour 3alsleam1";
  v2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pXQTat5xa_jxh8xM2p-AKDEXFPYgRqOI2Q&s"
  v3=false;
  v5=10;
  var1=10;
  fn(){
    let x=10;
    console.log(x);
    console.log(this.var1);
    alert("button clicked");
  }
  
  v4="Moataz"
  students=["Moataz","Yazid","Sami","Omar"];

  student2=[
    {name:"Moataz",age:30},
    {name:"Yazid",age:25},
    {name:"Sami",age:20},
    {name:"Omar",age:15}
  ];  
}
