import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  signUpSubmitted = false;
  title = 'LoginPage';
  hide = true;
  sighUpHide = true;
  role = [
    {id:1,name:'Manager'},
    {id:2,name:'Hr'},
    {id:3,name:'Ceo'},
    {id:4,name:'Director'},
    {id:5,name:'Client'},
  ]
  constructor(private fb:FormBuilder){ }
    loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],


    })
    SignUpForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      age:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      role:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],


    },{
      validator: ()=>{
        console.log('hello');
        if(this.SignUpForm?.controls?.['password'].value != this.SignUpForm?.controls?.['confirmPassword'].value){
          this.SignUpForm.controls?.['confirmPassword'].setErrors({passwordMismatch:true})
        }

      }
    })
    get AllControlsForSignUP(){

      return this.SignUpForm.controls
    }
    get AllControls(){

      return this.loginForm.controls
    }
    onSubmit(values:any){
      this.submitted = true;
      console.log(values);

    }
    onSubmitSignUp(values:any){
      this.signUpSubmitted = true;
      console.log(values);

    }

}
