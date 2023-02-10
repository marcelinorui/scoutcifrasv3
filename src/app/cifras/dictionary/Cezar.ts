import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class Cezar extends CifraDictionary {
    constructor() {
        super("Cezar", "Char", 'B', 'cezar.html', false);
    }

    protected BuildDictionary(): void {
        let field: number = 0;
        let A = "A".charCodeAt(0);

        if (typeof this.passwordField === 'string') {
            field = <number>this.passwordField.charCodeAt(0) - A;
        }

        this.BuildNewDictionary(<number>field);
    }

    protected BuildNewDictionary(field: number): void {
        let A = "A".charCodeAt(0);
        let num = field % 26;
        let dic = [];
        for (let i = 0; i < 26; i++) {
            dic.push(String.fromCharCode(A + i));
        }

        for (; num > 0; num--) {
            dic.push(dic.shift());
        }

        for (let i = 0; i < dic.length; i++) {
            let chr = String.fromCharCode(A + i);
            let codedChr = dic[i];

            this.DicCypher.set(chr, <string>codedChr);
            this.DicDecypher.set(<string>codedChr, chr);
        }
    }
}

