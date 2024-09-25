import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Movies} from "../../interface/movies";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/appstate";
import {selectAllMovies} from "../../store/movies.selectors";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
    imports: [
        NgIf,
        AsyncPipe
    ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
    movies$!: Observable<Movies[]>;

    constructor(private store: Store<AppState>) {
       this.movies$ =  store.select(selectAllMovies)
    }

}
