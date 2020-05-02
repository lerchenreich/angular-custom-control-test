import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inside',
  templateUrl: './test-in-appmodule.component.html',
  styleUrls: ['./test-in-appmodule.component.css']
})
export class TestInAppModuleComponent implements OnInit {

  aValue : string = 'In App.Module it works'
  
  constructor() { }

  ngOnInit(): void {
  }

}
