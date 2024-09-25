import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

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
export class SearchComponent implements OnInit{
    category!: string | null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.category = params['category'] || null
        })
    }

//     define placeholders
    getPlaceholders() {
        if (this.category === 'movie') {
            return 'Search for movies'
        }
        else if (this.category === 'tv series') {
            return 'Search for TV series'
        }
        else if(this.category === 'bookmark') {
            return 'Search for bookmarked shows'
        }
        else {
            return 'Search for movies or TV series'
        }
    }

}
