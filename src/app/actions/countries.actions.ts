import { Action, createAction, props } from "@ngrx/store";

export enum ActionTypes {
    LoadRandomRegion = '[Country Component] LoadRandomRegion',
    SuccessLoadRandomRegion = '[Country Component] Success LoadRandomRegion',
    ErrorLoadRandomRegion = '[Country Component] Error LoadRandomRegion'

}

export class LoadRandomRegion implements Action {
    readonly type = ActionTypes.LoadRandomRegion;

}
export class ErrorLoadRandomRegion implements Action {
    readonly type = ActionTypes.ErrorLoadRandomRegion;
}
export class SuccessLoadRandomRegion implements Action {
    readonly type = ActionTypes.SuccessLoadRandomRegion;
    payload: any;
    constructor() { }
    
}


