import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscomposto',
  templateUrl: './juroscomposto.component.html',
  styleUrls: ['./juroscomposto.component.css'],
})
export class JuroscompostoComponent implements OnInit {
  @Input() M: String;
  @Input() c: String;
  @Input() i: String;
  @Input() t: String;

  constructor() {}

  ngOnInit() {}

  getJurosComp() {
    return Number(this.c) * (1 * Number(this.i)) ** Number(this.t);
  }
}
