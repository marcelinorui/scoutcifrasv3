import { ICifra } from "./ICifra";
import { IScoutCifrasOption } from "./IScoutCifrasOption";

export interface IScoutCifrasService {
    getOptions(): Promise<Array<IScoutCifrasOption>>
    getCifras(option: IScoutCifrasOption): Promise<Array<ICifra>>
    getTemplate(filename:string):Promise<string>
}