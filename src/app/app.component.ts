import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  userData:any;
  loginUser(data:FormGroup){
    console.warn(data)
    this.userData=data
  }

  LoginForm= new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    lname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    pass:new FormControl('',[Validators.required,Validators.minLength(6)]),
    gmail:new FormControl('',[Validators.required])
  })
  
  get fnameX(){
    return this.LoginForm.get('fname',)
  }
  get lnameX(){
    return this.LoginForm.get('lname')
  }
  get passX(){
    return this.LoginForm.get('pass')
  }
  get emailX(){
    return this.LoginForm.get('gmail')
  }
}
