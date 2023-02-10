
import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class FraseChaveHorizontal extends CifraDictionary {
    constructor(){
        super("Frase Chave Horizontal","String",'SEMPRE ALERTA',"frase-chave-horizontal.html",false);
    }
        
    protected BuildDictionary(): void {
        var pw = <string>this.passwordField;
        pw = pw.split(' ').join('');
        this.BuildNewDictionary(pw);
    }   
    
    protected BuildNewDictionary(field:string): void {
        let A = "A".charCodeAt(0);
        let dic :Array<string> = [];

        for(let i = 0; i< field.length; i++){
            let chr = field.charAt(i);
            if(dic.indexOf(chr) === -1){
                dic.push(chr);
            }
        }
       
        for(let i = 0; i < 26; i++){
            let chr = String.fromCharCode(i + A);
            if(dic.indexOf(chr) === -1){
                dic.push(chr);
            }
        }

        for(let i = 0; i < dic.length; i++){
            let chr = String.fromCharCode(A + i);
            let codedChr = dic[i];

            this.DicCypher.set(chr, codedChr);
            this.DicDecypher.set(codedChr, chr);
        }
    }
}

