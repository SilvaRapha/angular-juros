import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurossimples',
  templateUrl: './jurossimples.component.html',
  styleUrls: ['./jurossimples.component.css'],
})
export class JurossimplesComponent implements OnInit {
  @Input() J: String;
  @Input() c: String;
  @Input() i: String;
  @Input() t: String;

  constructor() {}

  ngOnInit() {}

  getJuros() {
    return Number(this.c) * Number(this.i) * Number(this.t);
  }
}
