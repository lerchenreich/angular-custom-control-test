import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-in-module2',
  templateUrl: './test-in-module2.component.html',
  styleUrls: ['./test-in-module2.component.css']
})
export class TestInModule2Component implements OnInit {
  aValue : string = 'In modul 2 works'
  constructor() { }

  ngOnInit(): void {
  }

}
