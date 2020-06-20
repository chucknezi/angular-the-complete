import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // none or native
})
export class ServerElementComponent implements OnInit {

  @Input() public element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
