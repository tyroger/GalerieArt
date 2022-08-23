import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Galerie_test', routerLink:"/homepage"},
      { label: 'Peintures', routerLink:"/peintures"},
      { label: 'Scruptures', routerLink:"/scruptures"},
      { label: 'Photos', routerLink:"/photos"},
      { label: 'Contact', routerLink:"/contact"},
    ];
  }
}
