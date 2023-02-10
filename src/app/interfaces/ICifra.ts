import { IScoutCifrasService } from "./IScoutCifrasService";

export interface ICifra {
    name:string;
    type: 'Imagem'|'Texto';
    passwordFieldType: "Year" | "Char" | "String" | "Integer" | "None";
    passwordField:string|number|null;
    canCypher:boolean;
    canDecypher:boolean;
    templateName: string;
    templateContent: string;
    Cypher(text:string, password:string):string;
    Decypher(text:string, password:string):string;
    GetHelpTemplate(service:IScoutCifrasService):void;
    GetHelpDebugDic(isCypher:number): string;
    hasPassword():boolean;
    hasHelp():boolean;
}