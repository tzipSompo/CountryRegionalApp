export class Country {
    name!:string;
    capital!: string;
    population!: number;
    currencies!:Array<Currency>;
    flag!:string;
}
export class Currency{
    code!:string;
    name!:string;
    symbol!:string
}
