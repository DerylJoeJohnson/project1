import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{DataService} from '../data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname;
  pwd;
  details
  constructor(private rt:Router, private ds:DataService) { }

  ngOnInit() {
    
  }
  signup()
  {
    this.rt.navigateByUrl('/register')
  }
  signin()
  {
    this.ds.logincheck(this.uname,this.pwd).subscribe(data=>{
      this.details=data;
      console.log(this.details);
      
      this.rt.navigateByUrl("/home")
    })
    // this.de
    
  }

}
