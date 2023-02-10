

import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class Inverso extends CifraDictionary {
    constructor(){
        super("Inverso","None",null,"inverso.html",false);
    }
        
    protected BuildDictionary(): void {
        let A = "A".charCodeAt(0);
        let Z = "Z".charCodeAt(0);
        for(let i = 0; i < 26; i++){
            this.DicCypher.set(String.fromCharCode(A + i), String.fromCharCode(Z - i));
            this.DicDecypher.set(String.fromCharCode(Z -i), String.fromCharCode(A + i));
        }
    }       
}

