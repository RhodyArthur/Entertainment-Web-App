import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        NgOptimizedImage, RouterLink
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
