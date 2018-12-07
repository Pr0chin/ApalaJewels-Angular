import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApalaJewels';
  images = [1, 2, 3].map(() => `https://picsum.photos/1349/500?random&t=${Math.random()}`);
  isCollapsed = true;
  toggleCollapsed() {
    alert("hy what's up");
    this.isCollapsed = !this.isCollapsed;
  }

}