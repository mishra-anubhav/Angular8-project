# Angular 8

## For installing Angular:
    ng install -g @angular/cli@latest

## For updating Angular:
    ng uninstall -g @angular/cli    
    npm cache clean 
    ng install -g @angular/cli@latest

Data Binding Techniques =>

1. String interpolation:
String interpolation can be used for the dynamic presentation of one variable in many places.
Example:
HTML file:
    {{ text }}  
TS file:
    text = 'Anything'

2. Property binding:
As the name suggest its related to properties of the html file.
Example:
HTML file:
    [diasbled] = "text"
TS file: 
    text ='false'
(and for altering the result we can use setTimeout method in constructor )

3. event binding
We  use event binding for the options that users need like click, input etc.
Example:
HTML file:
    (click)="getStatus()"
TS file: 
    something=false;
    getStatus(){
    this.something=true;
    }

TWO WAY DATA BINDING:

In this we use [(ngModel)] and String interpolation for dynamic change. 

Example:
HTML file:

<input type ="text" [(ngModel)]="serverName"><p>{{serverName}}</p>

TS FILE:
serverName="AWS"


Now, its time for undersanding directive:
1. *ngIf
2. *ngIf with <ng-tempelate>
3. [ngStyle] (DIrective is used as a property)
4. [ngClass]="{online:serverStatus ==="online"}"
5. *ngFor 

