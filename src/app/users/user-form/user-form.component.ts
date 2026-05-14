import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
userForm!: FormGroup;
constructor(private fb: FormBuilder){}
ngOnInit(): void {
  // FormBuilder2
  this.userForm = this.fb.group({
    name : ['',[Validators.required, Validators.maxLength(3)]],
    email : ['',Validators.email],
    password : ['',Validators.minLength(3)]
  });
  /// FormGroup1
  // this.userForm = new FormGroup({
  //   name : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl('')
  // });
}
onSubmit(){
  console.log(this.userForm.value);
}
get name(){
  return this.userForm.get('name');
}
}
