
import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class Data extends CifraDictionary {

    constructor(){
        super("Data","Year","1927",'data.html',true);
    }

    protected BuildDictionary(): void {
        this.BuildNewDictionary(<string>this.passwordField);
    }

    protected BuildNewDictionary(field:string):void{
        let A = 'A'.charCodeAt(0);
        let cDataHelper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789    ';

        for(let i = 0; i < cDataHelper.length; i++){
            let chr = cDataHelper[i];
            let col = Math.floor(i%10)+1;
            if(col >= 10){
                col-=10;
            }
            let row = Math.floor(i/10);
            
            let codedChr = field.charAt(row) + col;
            this.DicCypher.set(chr, codedChr);
            this.DicDecypher.set(codedChr, chr);
        }
    }
}