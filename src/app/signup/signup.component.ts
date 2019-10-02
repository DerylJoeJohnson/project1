import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname;
  email;
  pwd;
  userdetails
  constructor(private ds:DataService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit() {
  }

  public register()
{
  
    this.ds.adduser(this.uname,this.email,this.pwd).subscribe(data=>{
    this.userdetails=data;
    //this.alertService.success('Registration successful', true);
    this.router.navigateByUrl("");
    })
  }

}
