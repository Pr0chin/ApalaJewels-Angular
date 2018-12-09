import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apala-home',
  templateUrl: './apala-home.component.html',
  styleUrls: ['./apala-home.component.css']
})
export class ApalaHomeComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1349/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
