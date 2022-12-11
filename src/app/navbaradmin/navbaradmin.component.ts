import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  username=""
  password=""
  constructor(private router:Router){}
    readValue=()=>
    {
      let data:any={
  
        "username":this.username,"password":this.password
      }
      console.log(data)
  
      if (this.username=="admin"&& this.password=="12345") {
          this.router.navigate(['/dash'])
      } else {
          alert("invalid credentials")
          this.password=""
          this.username=""
      }
    }
}
