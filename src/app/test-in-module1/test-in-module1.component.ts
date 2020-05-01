import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-in-module1',
  templateUrl: './test-in-module1.component.html',
  styleUrls: ['./test-in-module1.component.css']
})
export class TestInModule1Component implements OnInit {
  aValue : string = 'In modul 1 works'
  constructor() { }

  ngOnInit(): void {
  }

}
