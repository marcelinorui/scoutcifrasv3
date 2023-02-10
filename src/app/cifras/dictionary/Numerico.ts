
import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";


export class Numerico extends CifraDictionary {
    constructor(){
        super("Numerico","None",null,"numerico.html",true);
    }
        
    protected BuildDictionary(): void {
        let A = "A".charCodeAt(0);
        
        for(let i = 0; i < 26; i++){
            this.DicCypher.set(String.fromCharCode(A + i) ,(i+1).toString());
            this.DicDecypher.set((i+1).toString(), String.fromCharCode(A + i));
        }
    }       
}