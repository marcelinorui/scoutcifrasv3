import { CifraBase } from "../../../app/cifras/CifraBase";

export class Caranguejo extends CifraBase {    
    constructor(){
        super("Caranguejo","Texto","None",null,true,true,"caranguejo.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }   


    protected Translate(text:string){
        let trans = '';

        let A = "A".charCodeAt(0);
		let Z = "Z".charCodeAt(0);

		 for(let i =0;i < text.length; i++){
			let chr = text[text.length -i -1];

			if (chr.charCodeAt(0) >= A && chr.charCodeAt(0) <= Z) {
				trans += '<span>'+chr+'</span>';
			}
			else {
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

    protected TranslateCypher(text: string, password: string): string{
        return this.Translate(text);
    }

    protected TranslateDecypher(text: string, password: string): string{
         return this.Translate(text);
    } 

}