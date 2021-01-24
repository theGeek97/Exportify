import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  postData:any;
  userNo;
  constructor(private service:UserDataService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(res=>{
      this.userNo=res.userId;

      });
      console.log(this.userNo);
    this.service.fetchPosts().subscribe(res=>{
      this.postData=res.filter(item=>item.userId==this.userNo);

    })
  }

}
