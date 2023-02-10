import { Injectable } from "@angular/core";

import { ICifra } from "./interfaces/ICifra";
import { IScoutCifrasOption } from "./interfaces/IScoutCifrasOption";
import { IScoutCifrasService } from "./interfaces/IScoutCifrasService";

import { Inverso } from "./cifras/dictionary/Inverso";
import { RomanoArabe } from "./cifras/dictionary/RomanoArabe";
import { Homografo } from "./cifras/image/Homografo";
import { Galo } from "./cifras/image/Galo";
import { Chines } from "./cifras/image/Chines";
import { Caranguejo } from "./cifras/text/Caranguejo";
import { PrimeiraLetraFalsa, UltimaLetraFalsa } from "./cifras/text/LetraFalsa";
import { NMelros } from "./cifras/text/NMelros";
import { SMS } from "./cifras/dictionary/SMS";
import { Numerico } from "./cifras/dictionary/Numerico";
import { VogaisPorPontos } from "./cifras/text/VogaisPorPontos";
import { Metades } from "./cifras/text/NMetades";
import { BrailleFalso } from "./cifras/image/BrailleFalso";
import { BatalhaNaval } from "./cifras/dictionary/BatalhaNaval";
import { Data } from "./cifras/dictionary/Data";
import { Cezar } from "./cifras/dictionary/Cezar";
import { FraseChaveHorizontal } from "./cifras/dictionary/FraseChaveHorizontal";
import { FraseChaveVertical } from "./cifras/dictionary/FraseChaveVertical";
import { Horizontal } from "./cifras/text/Horizontal";
import { Vertical } from "./cifras/text/Vertical";


@Injectable()
export class ScoutCifrasService implements IScoutCifrasService {
    private _cifras: ICifra[] = [
        new Inverso(),
        new RomanoArabe(),
        new Homografo(),
        new Galo(),
        new Chines(),
        new Caranguejo(),
        new PrimeiraLetraFalsa(),
        new UltimaLetraFalsa(),
        new NMelros(),
        new SMS(),
        new Numerico(),
        new VogaisPorPontos(),
        new Metades(),
        new BrailleFalso(),
        new BatalhaNaval(),
        new Data(),
        new Cezar(),
        new FraseChaveHorizontal(),
        new FraseChaveVertical(),
        new Horizontal(),
        new Vertical()
    ];

    private _options: IScoutCifrasOption[] = [
        { value: 0, text: 'Cifrar' },
        { value: 1, text: 'Decifrar' }
    ];

    public get cifras(): ICifra[] {
        return this._cifras;
    }
    public set cifras(value: ICifra[]) {
        this._cifras = value;
    }

    private baseUrl:string = 'http://localhost:4200/assets/help/'

    constructor(/*private http: Http*/) {
        this.cifras.sort((a, b) => { return a.name.localeCompare(b.name); });
    }

    getOptions(): Promise<Array<IScoutCifrasOption>> {
        return Promise.resolve(this._options);
    }

    getCifras(option: IScoutCifrasOption): Promise<Array<ICifra>> {
        let search: ICifra[] = this.cifras.filter((c) => {
            if (option.value === 0) {
                if (c.canCypher === true) {
                    return c;
                }
            } else {
                if (c.canDecypher === true) {
                    return c;
                }
                
            }
            return null;
        });

        return Promise.resolve(search);
    }

    getCifra(cifraName: string): Promise<ICifra>{
        let search: ICifra = this.cifras.filter((c) =>{
               if(c.name == cifraName){
                    return c;
                }   
                return null;
        })[0];
        return Promise.resolve(search);
    }
    
    getOption(option: string | number){
        let search: IScoutCifrasOption = this._options.filter((c) =>{if(option === c.value){return true;} return null; })[0];
        return Promise.resolve(search);
    }
    getTemplate(filename:string):Promise<string>{
        return Promise.resolve("");/*this.http.get(this.baseUrl + filename).toPromise().then((res:Response) => res.text())*/;
    }
}