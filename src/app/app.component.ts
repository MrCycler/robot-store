import { Component } from '@angular/core';
// importación de modelos
import { RobotPart } from './robotPart.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'robot-store';
  robots = ['Wall-e', 'C3PO', 'R2D2', 'B-max'];
  addItem() {
    this.robots.push('Robot sin nombre');
  }
  deleteItem(index: number) {
    this.robots.splice(index, 1);
  }
  robotParts: RobotPart[] = [
    {
      id: '1',
      image: 'assets/images/arm.jpg',
      title: 'Brazo Robótico',
      price: 1000,
      description: 'un brazo robótico',
    },
    {
      id: '2',
      image: 'assets/images/brain.jpg',
      title: 'Cerebro Robótico',
      price: 2000,
      description: 'un cerebro robótico',
    },
    {
      id: '3',
      image: 'assets/images/leg.png',
      title: 'Pierna Robótica',
      price: 3000,
      description: 'una pierna robótico',
    },
  ];
}
