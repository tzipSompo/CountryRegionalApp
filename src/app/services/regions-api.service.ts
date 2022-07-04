import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import {regions} from '../globals/regions'

@Injectable()
export class RegionsApiService {
    private headers: HttpHeaders;
    randomRegion!: string;
    sub!: Subscription;

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }

    getCountriesByRegion() {
        this.randomRegion = regions[Math.floor(Math.random() * regions.length)];
        var countriesServiceUrl = `https://restcountries.com/v2/regionalbloc/${this.randomRegion}`;
        return this.go(countriesServiceUrl);
    }




    go(url: string) {
        return this.httpClient.get(url, { headers: this.headers })
            .pipe(
                map((res: any) => {
                    return res;
                }),

            );
    }

}
