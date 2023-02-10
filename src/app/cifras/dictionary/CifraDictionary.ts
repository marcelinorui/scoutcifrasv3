import { CifraBase } from "../../../app/cifras/CifraBase";

export abstract class CifraDictionary extends CifraBase {


    constructor(name: string,
        passwordFieldType :"Year" | "Char" | "String" | "Integer" | "None",
        passwordField:any,
        templateName : string,
        protected spaceBetweenChars: boolean = true
    ) {
        super(name, "Texto", passwordFieldType, passwordField, true, true,templateName);
        this.BuildDictionary();
    }

    protected Translate(text: string, dic: Map<string, string>) {
        let trans = '';

        let A = "A".charCodeAt(0);
        let Z = "Z".charCodeAt(0);

        for (let i = 0; i < text.length; i++) {
            let chr = text[i];

            if (chr.charCodeAt(0) >= A && chr.charCodeAt(0) <= Z) {
                trans += dic.get(chr) + (this.spaceBetweenChars === true ? '&nbsp;' : '');
            }
            else {
                if (text[i] == '\n') {
                    trans += '<br />';
                } else {
                    if (chr == ' ') {
                        trans += '&nbsp;&nbsp;&nbsp;&nbsp;'
                    } else if (chr == '\t') {
                        trans += '&nbsp;&nbsp;&nbsp;&nbsp;'
                    } else {
                        trans += chr;
                    }
                }
            }
        }
        return trans;
    }

    protected TranslateCypher(text: string, password: string): string {
        if (this.passwordFieldType !== "None"){
            this.passwordField = password;
            this.DicCypher = new Map<string,string>();
            this.DicDecypher = new Map<string,string>()
            this.BuildDictionary();
        }
        return this.Translate(text, this.DicCypher);
    }

    protected TranslateDecypher(text: string, password: string): string {
         if (this.passwordFieldType !== "None"){
            this.passwordField = password;
            this.DicCypher = new Map<string,string>();
            this.DicDecypher= new Map<string,string>();
            this.BuildDictionary();
        }
        if (this.spaceBetweenChars === true) {
            let trans = '';
            let token = text.split(/[\s]+/g);

            for (let i = 0; i < token.length; i++) {
                if (token[i] && token[i] != '') {
                    let t = this.DicDecypher.get(token[i]);
                    if (t) {
                        trans += t;
                    }
                }
            }
            return trans;
        } else {
            return this.Translate(text, this.DicDecypher);
        }
    }
}