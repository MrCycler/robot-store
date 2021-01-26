import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'robot-store';
  robots = ['Wall-e','C3PO','R2D2','B-max'];
  addItem(){
    this.robots.push("Robot sin nombre");
  };
  deleteItem(index:number){
    this.robots.splice(index,1);
  };
}
