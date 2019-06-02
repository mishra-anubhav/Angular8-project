import { Component, OnInit } from '@angular/core';

@Component(
{
    selector:'app-warning',
    templateUrl:'warning.component.html'
})
export class WarningComponent implements OnInit{
allowNewServer=false;
serverCreationStatus= 'no server was created!';
serverName="TestServer";
constructor(){
    setTimeout(() =>{
        this.allowNewServer =true;
    },2000);
    }
    ngOnInit(){

    }
    onCreateServer(){
        this.serverCreationStatus="Server was created!";
    }
    on(){
        this.serverName = (<HTMLInputElement>event.target).value;

    }
}
