import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { datavaild } from '../validation';

@Component({
  selector: 'app-childdetail',
  templateUrl: './childdetail.component.html',
  styleUrls: ['./childdetail.component.css']
})
export class ChilddetailComponent implements OnInit {
@Input() item:datavaild[]=[{id:0,name:'',email:'',address:'',gender:''}]
obj:datavaild={'id':0,'name':'','email':'','address':'','gender':''}
i=0;
get(ob:datavaild){
  this.obj=ob
  this.i=1;
}
constructor() { }

  ngOnInit() {
  }

}