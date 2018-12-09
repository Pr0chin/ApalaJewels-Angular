import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApalaJewels';
  isCollapsed = true;

  toggleCollapsed() {
    alert("hy what's up");
    this.isCollapsed = !this.isCollapsed;
  }

}