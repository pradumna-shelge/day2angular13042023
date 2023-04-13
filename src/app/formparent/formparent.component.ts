import { Component, OnInit } from '@angular/core';
import { datavaild } from '../validation';


@Component({
  selector: 'app-formparent',
  templateUrl: './formparent.component.html',
  styleUrls: ['./formparent.component.css']
})
export class FormparentComponent implements OnInit {
  arr:datavaild[]=[{'id':0,'name':'','email':'','address':'','gender':''}]

  obj:datavaild={'id':0,'name':'','email':'','address':'','gender':''}
  index=0
  
  
  addData(){
    this.arr.push({
      id:this.index,
      name:this.obj.name,
      email:this.obj.email,
      address:this.obj.address,
      gender:this.obj.gender
    })
    this.index+=1
    
  }
  constructor() { }

  ngOnInit() {
  }

}