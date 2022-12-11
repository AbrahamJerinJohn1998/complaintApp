import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userid:any=""
  userdata:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userInfo")
  let data:any={
    "id":this.userid
  }
  this.api.getProfileDetails(data).subscribe(
    (response:any)=>
    {
      this.userdata=response;
    }
  )
  }
}
