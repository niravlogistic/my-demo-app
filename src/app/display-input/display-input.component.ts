import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.css']
})
export class DisplayInputComponent implements OnInit {
  @Input() myInput: number;
  constructor() { }

  ngOnInit() {
  }

}
