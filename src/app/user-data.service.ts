import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // userName='admin';
  // userPassword='admin@123'

  user={
    userName:'admin',
    userPassword:'admin@123'
  }
  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      
  }

  fetchUserData():Observable<any>{
    const url='https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
 
  login(username,password){
    // const url='https://jsonplaceholder.typicode.com/users';
    if(this.user.userName===username && this.user.userPassword===password){
      localStorage.setItem('userDetails',JSON.stringify(this.user));
      return true
    //  return this.http.get(url);
    }
    else{
      return false;
    }
  }

  fetchPosts():Observable<any>{
    const url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
}
