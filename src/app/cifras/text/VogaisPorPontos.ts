import { CifraBase } from "../../../app/cifras/CifraBase";

export class VogaisPorPontos extends CifraBase {
    constructor() {
        super("Vogais Por Pontos", "Texto", "None", null, true, false,"vogais-por-pontos.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }

    protected TranslateCypher(text: string, password: string): string {
         let trans = '';       

		 for(let i =0;i < text.length; i++){
			let chr = text[i];

			if ( chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U' ){
			    trans += '.';
            } else {
				if (text[i] == '\n') {
					trans += '<br />';
				} else {
                    if(chr == ' '){
                        trans += '<span>&nbsp;</span>'+'<span>&nbsp;</span>'+'<span>&nbsp;</span>'+'<span>&nbsp;</span>'
                    } else if ( chr == '\t') {
                        trans += '<span>&nbsp;</span>'+'<span>&nbsp;</span>'+'<span>&nbsp;</span>'+'<span>&nbsp;</span>'
                    } else {
                        trans += '<span>'+chr+'</span>';
                    }
				}
			}
        }
        return trans;  
    }

    protected TranslateDecypher(text: string, password: string): string {
        
        return "";        
    }

}    