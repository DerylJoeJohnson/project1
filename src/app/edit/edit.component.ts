import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {DataService} from '../data.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  result;
  userdetails;
  constructor(private rt:Router, private ds:DataService) { }

  ngOnInit() {

    this.ds.view().subscribe(data=>{
      this.result=data;
      // console.log(this.result);
      // JSON.parse(JSON.stringify(data))
    })
  }

  deletematerial(id)
  {
      this.ds.deletedata(id).subscribe(data=>{
        alert(JSON.parse(JSON.stringify(data)).msg);
        })
  }

}
