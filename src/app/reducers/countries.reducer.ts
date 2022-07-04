import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions/countries.actions";
import { Country } from "../models/Country";

export const initialState = { countries: new Array<Country>() };

export function countriesReducer(state = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.SuccessLoadRandomRegion:
            if (state && state.countries && state.countries.length > 0) {
                if (state.countries.every(country => action.payload.includes(country))) {
                    return {
                        ...state,
                        countries: state.countries
                    };
                } else
                    return {
                        countries: [...state.countries, ...action.payload]
                    };
            } else {
                return {
                    ...state,
                    countries: action.payload
                };
            }

        default:
            return state;
    }
}