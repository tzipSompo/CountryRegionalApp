import { Component, OnInit, TemplateRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { Country } from '../models/Country';
import { letters } from '../globals/letters'


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<any>;
  filteredCountries: Array<Country> = new Array<Country>();
  randomCountries: Array<Country> = new Array<Country>();
  filterdletters: Array<string> = new Array<string>();
  searchModel!: string;
  searchByLetterModel!: string;

  letters = letters;

  constructor(private store: Store<{ countries: Array<Country> }>) {
    this.countries$ = store.pipe(select('countries'));
  }

  ngOnInit() {
    this.countries$.subscribe(x => {
      if (x.countries && x.countries.length > 0) {
        this.randomCountries = x.countries;
        this.filterletters();
      }
    });
  }

  filterletters() {
    this.filterdletters = this.letters.filter(letter => this.randomCountries.find((country) => country.name.startsWith(letter)));
  }

  onChangefilterLetters(letter: string) {
    this.searchModel = "";
    this.filteredCountries = this.randomCountries.filter(country => country.name.startsWith(letter));

  }


  search(term: any) {
    this.searchByLetterModel = "";
    var value  = term ? term.value :null;
    if (value && value.length < 1)
      this.filteredCountries = [];
    else
      this.filteredCountries = this.randomCountries.filter(v => v.name.toLowerCase().indexOf(value.toLowerCase()) > -1).slice(0, 10);
  }


}
