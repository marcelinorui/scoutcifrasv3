import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class FraseChaveVertical extends CifraDictionary {
    constructor(){
        super("Frase Chave Vertical","String",'SEMPRE ALERTA',"frase-chave-vertical.html",false);
    }
        
    protected BuildDictionary(): void {
        var pw = <string>this.passwordField;
        pw = pw.split(' ').join('');
        this.BuildNewDictionary(pw);
    }   
    
    protected BuildNewDictionary(field:string): void {
        let A = "A".charCodeAt(0);
        let bKey = [];
        let bDic :Array<Array<string>> = [[],[]];

        for(let i = 0; i< field.length; i++){
            let chr = field.charAt(i);
            if(bKey.indexOf(chr) === -1){
                bKey.push(chr);
            }
        }
       
        for(let i = 0; i < 26; i++){
            let chr = String.fromCharCode(i + A);
            if(bKey.indexOf(chr) === -1){
                bKey.push(chr);
            }
        }

        for(let i = 0; i < 13; i++){
            bDic[0].push(bKey[i]);
            bDic[1].push(bKey[i+13]);
        }

        for(let i = 0; i < 13; i++){
            let chr1 = bDic[0][i];
            let chr2 = bDic[1][i];
            
            this.DicCypher.set(chr1, chr2);
            this.DicCypher.set(chr2, chr1);
            this.DicDecypher.set(chr1, chr2);
            this.DicDecypher.set(chr2, chr1);
        }
    }
}

