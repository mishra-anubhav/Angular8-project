import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamestart',
  templateUrl: './gamestart.component.html',
  styleUrls: ['./gamestart.component.css']
})
export class GamestartComponent implements OnInit {
  interval;
 @Output() intervalFired = new EventEmitter<number>();
  zero=0;
  gameStart(){
    this.interval=setInterval(() =>{
    this.intervalFired.emit(this.zero+1);
    this.zero++
console.log("zero"+this.zero);
console.log("intervalFired"+this.intervalFired);
console.log("interval"+this.interval);

    },1000);
  }
  stopthegame(){
    clearInterval(this.interval)
  
  }
  constructor() { }

  ngOnInit() {
  }

}
