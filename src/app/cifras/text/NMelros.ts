import { CifraBase } from "../../../app/cifras/CifraBase";

export class NMelros extends CifraBase {
    constructor(protected num: number = 0) {
        super("Salta N Melros", "Texto", "Integer", 1, true, true, "melros.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }

    protected GetLetra(): string {
        return String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26));
    }

    protected GetLetras(): string {
        let letras = '';
        for (let i = 0; i < this.num; i++) {
            letras += this.GetLetra();
        }
        return letras;
    }

    protected Translate(text: string) {
        let trans = '';

        let A = "A".charCodeAt(0);
        let Z = "Z".charCodeAt(0);

        for (let i = 0; i < text.length; i++) {
            let chr = text[i];

            if (chr.charCodeAt(0) >= A && chr.charCodeAt(0) <= Z) {
                trans += chr + this.GetLetras();
            }
            else {
                if (text[i] == '\n') {
                    trans += '<br />';
                } else {
                    if (chr == ' ') {
                        trans += '<span>&nbsp;</span>' + '<span>&nbsp;</span>' + '<span>&nbsp;</span>' + '<span>&nbsp;</span>'
                    } else if (chr == '\t') {
                        trans += '<span>&nbsp;</span>' + '<span>&nbsp;</span>' + '<span>&nbsp;</span>' + '<span>&nbsp;</span>'
                    } else {
                        trans += '<span>' + chr + '</span>';
                    }
                }
            }
        }
        return trans;
    }

    protected TranslateCypher(text: string, password: string): string {
        this.num = Number(password);
        return this.Translate(text);
    }

    protected TranslateDecypher(text: string, password: string): string {
        this.num = Number(password);
        let trans = '';
        for (let i = 0, j = 0; i < text.length; i++) {
            let chr = text[i];
            if (chr == ' ') {
                trans+= chr;
                ++j;
            } else if (chr == '\t') {
                trans+= chr;
                ++j;
            } else {
                if ((i - j) % (this.num + 1) === 0) {
                    trans += chr;
                }
            }
        }
        return trans;
    }

}

/*
export class Salta1Melro extends NMelros {

    constructor(){
        super(1);
    }
}


export class Salta2Melro extends NMelros {

    constructor(){
        super(2);
    }
}


export class Salta3Melro extends NMelros {

    constructor(){
        super(3);
    }
}*/