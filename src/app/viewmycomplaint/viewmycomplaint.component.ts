import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmycomplaint',
  templateUrl: './viewmycomplaint.component.html',
  styleUrls: ['./viewmycomplaint.component.css']
})
export class ViewmycomplaintComponent {
  userId:any=""
  data:any=[]
  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")
    let data:any={
      "userId":this.userId
    }
    this.api.viewMyComplaints(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
}
