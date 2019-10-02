import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {DataService} from '../data.service'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  result;

  constructor(private rt:Router, private ds:DataService) { }

  ngOnInit() {
    this.ds.view().subscribe(data=>{
      this.result=data;
      // console.log(this.result);
      // JSON.parse(JSON.stringify(data))
    })
     
    }
    detailView(id)
    {
      console.log("iddddddddd",id)
      this.rt.navigateByUrl("/detailview/"+id)
    }
  
}
