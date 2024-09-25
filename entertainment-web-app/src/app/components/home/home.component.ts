import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Movies} from "../../interface/movies";
import {AppState} from "../../store/appstate";
import {Store} from "@ngrx/store";
import {selectFilteredMovies} from "../../store/movies.selectors";
import {AsyncPipe, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SearchComponent} from "../search/search.component";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgIf,
        AsyncPipe,
        SearchComponent,
        MenuComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    movies$!: Observable<Movies[]>;
    category!: string | null;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.category = params['category'] || null
            this.movies$ = this.store.select(selectFilteredMovies(this.category))
        })
    }



}
