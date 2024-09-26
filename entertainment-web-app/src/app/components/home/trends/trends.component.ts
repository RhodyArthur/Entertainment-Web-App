import {Component, Input} from '@angular/core';
import {Movies} from "../../../interface/movies";

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class TrendsComponent {

    @Input() trends!: Movies[];
}
