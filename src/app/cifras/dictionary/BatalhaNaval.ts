import { CifraDictionary } from "./CifraDictionary";

export class BatalhaNaval extends CifraDictionary {

    constructor(){
        super("Batalha Naval","Char","J","batalha-naval.html",true);
    }

    protected BuildDictionary(): void {
        
        this.BuildNewDictionary(<string>this.passwordField);
    }

    protected BuildNewDictionary(field:string):void{
        let bNaval = [];
        let A = "A".charCodeAt(0);
        let n = field.charCodeAt(0) - A;

        for(let i = 0; i < 26; i++){
            bNaval.push(String.fromCharCode( i + A));
        }

        for(;n > 0; n --){
            bNaval.push(bNaval.shift());
        }
        bNaval.shift();

        for(let i = 0; i < 26; i++){
            let chr = String.fromCharCode( i+A);
            let idx = bNaval.indexOf( String.fromCharCode( i+A));
            
            if(idx > -1){
                let row = Math.floor(idx/5)+1;
                let col = Math.floor(idx%5) ;
                let codedChr = String.fromCharCode(col+A) + row;
                this.DicCypher.set(chr,codedChr);
                this.DicDecypher.set(codedChr,chr);

            } else {
                this.DicCypher.set(chr,'');
            }
        }
    }
}