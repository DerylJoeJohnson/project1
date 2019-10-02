import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {DataService} from '../data.service'
 @Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  id;
  view;
  constructor(private ar:ActivatedRoute, private ds:DataService) { }

  ngOnInit() {

    this.id=this.ar.snapshot.paramMap.get("id")
    console.log("id",this.id)
    this.ds.viewdetails(this.id).subscribe(data=>
      {
          this.view=data;
          console.log("result....",this.view);
          
          
      })

  }

}
