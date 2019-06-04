import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
odd:number[]=[]
even:number[]=[]
 
onIntervalFired(fired:number){
  if (fired % 2 === 0){
    this.even.push(fired);
    }
    else{
      this.odd.push(fired);
    }

}
}
