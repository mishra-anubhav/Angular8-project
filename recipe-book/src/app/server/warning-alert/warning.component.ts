import { Component, OnInit } from '@angular/core';

@Component(
{
    selector:'app-warning',
    templateUrl:'warning.component.html',
    styleUrls:['warning.component.css'],
})
export class WarningComponent implements OnInit{
showpara=false;
logs=[];
showpass(){
    this.showpara=!this.showpara;
    //this.logs.push(this.logs.length +1);
    this.logs.push(new Date());
}
constructor(){
   }
    ngOnInit(){

    }

}
