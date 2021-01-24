import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  userDataList:any;
  duplicateDataList:any
  constructor(
    private route:Router,
    private cd: ChangeDetectorRef,
    private service:UserDataService
    ) {}

  ngOnInit(): void {
    this.service.fetchUserData().subscribe(res=>{
      this.userDataList=res
   this.duplicateDataList=this.userDataList;
    })
   
   //const user = JSON.parse(localStorage.getItem('userDetails'));
  }

  goToPost(data){
    this.route.navigate(['/postPage'],{queryParams:{userId:data.id}}
      )
  }

  getData(event){
    let data:any;
    data=this.duplicateDataList.filter(item=>item['name'].toLowerCase().includes(event.toLowerCase()));
    this.userDataList=data;
    this.cd.detectChanges();
  }
}
