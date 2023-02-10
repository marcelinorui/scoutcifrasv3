import { CifraBase } from "../../../app/cifras/CifraBase";

class LetraFalsa extends CifraBase {
    constructor(protected first: boolean) {
        super((first === true ? "Primeira" : "Última") + " Letra Falsa", "Texto", "None", null, true, true, (first === true ? "primeiraletrafalsa.html" : "ultimaletrafalsa.html"));        
        
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }

    protected GetLetra(): string {
        return String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26));
    }

    protected Translate(text: string) {
        let trans = '';
        var rTexto = new RegExp(/(\w)+|\s/g);

        let match;

        while ((match = rTexto.exec(text)) != null) {
            if (match[0] != ' ' && match[0] != '\r' && match[0] != '\n') {
                if (this.first === true) {
                    trans += this.GetLetra() + match[0];
                } else {
                    trans += match[0] + this.GetLetra();
                }
            }

            if (match[0] == '\n') {
                trans += '<br />';
            } else {
                if (match[0] == ' ') {
                    trans += '&nbsp';
                }
            }

            text.replace(match[0], '');
        }

        return trans;
    }

    protected TranslateCypher(text: string, password: string): string {
        return this.Translate(text);
    }

    protected TranslateDecypher(text: string, password: string): string {
        //remove last letter from each word
        let trans = [];
        let token = text.split(' ');
        for (let i = 0; i < token.length; i++) {
            if (this.first === true) {
                trans.push(token[i].slice(1));
            } else {
                trans.push(token[i].substring(0, token[i].length - 1));
            }
        }
        return trans.join(' ');
    }
}


export class PrimeiraLetraFalsa extends LetraFalsa {
    constructor() {
        super(true);
    }
}

export class UltimaLetraFalsa extends LetraFalsa {
    constructor() {
        super(false);
    }
}

