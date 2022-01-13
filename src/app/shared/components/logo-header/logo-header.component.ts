import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.scss']
})
export class LogoHeaderComponent implements OnInit {
  @Input('ruta') ruta: string = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
