import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-house-of-apala',
  templateUrl: './the-house-of-apala.component.html',
  styleUrls: ['./the-house-of-apala.component.css']
})
export class TheHouseOfApalaComponent implements OnInit {
images = [1, 2, 3].map(() => `https://picsum.photos/1349/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
