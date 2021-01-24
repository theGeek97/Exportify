import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserDataService} from '../user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit,OnDestroy {

  loginForm:FormGroup;
  show=false;
  sub$ : Subscription;
  constructor(
    protected fb:FormBuilder,
    protected route: Router,
    protected service:UserDataService
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginForm.valid){
      const bool= this.service.login(this.loginForm.value.userName,this.loginForm.value.userPassword);
      if(bool === true){
        this.route.navigateByUrl('/userPage')
      }
      else{
        alert('The credentials are wrong. Please try with correct credentials.');
      }
    }
  }

  buildForm(){
    this.loginForm=this.fb.group({
      userName:new FormControl('',Validators.required),
      userPassword:new FormControl('',Validators.minLength(5)),
      checkboxValue:new FormControl(false)
    });

  this.sub$=this.loginForm.controls['checkboxValue'].valueChanges.subscribe(res=>{
    this.show=res;
  });
  }

  ngOnDestroy(){
    if(this.sub$){
      this.sub$.unsubscribe();
    }
  }
}
