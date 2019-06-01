import { Component, OnInit } from '@angular/core';

@Component(
{
    selector:'app-warning',
    templateUrl:'warning.component.html'
})
export class WarningComponent implements OnInit{
allowNewServer=false;
constructor(){
    setTimeout(() =>{
        this.allowNewServer =true;
    },2000);
    }
    ngOnInit(){

    }
}
