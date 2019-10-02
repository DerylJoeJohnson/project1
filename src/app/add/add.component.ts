import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
subject;
class;
contents;
det;
board;
details;
  constructor(private rt : Router, private ds : DataService) { }

  ngOnInit() {
  }
public add()
{
  this.ds.addmaterial(this.subject,this.class,this.contents,this.det,this.board).subscribe(data=>{
    this.details=data;
  })
}
}
