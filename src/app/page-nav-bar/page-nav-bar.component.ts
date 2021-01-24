import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-nav-bar',
  templateUrl: './page-nav-bar.component.html',
  styleUrls: ['./page-nav-bar.component.css']
})
export class PageNavBarComponent implements OnInit {
  @Input() fromPage:any;
  @Output() searchText = new EventEmitter(null);
  searchForm:FormGroup
  userName;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.userName=JSON.parse(localStorage.getItem('userDetails')).userName;
  }

  buildForm(){
    this.searchForm=this.fb.group({
      search:new FormControl('')
    })
  }
  logout(){  
    localStorage.removeItem('userDetails');
    this.router.navigateByUrl('/login');
  }
  onSearch(){
    const search=this.searchForm.get('search').value;
    this.searchText.emit(search);
  }
}
