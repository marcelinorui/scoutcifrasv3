import { CifraBase } from "../../../app/cifras/CifraBase";

export abstract class CifraImage extends CifraBase {
    constructor(name:string, protected pictureDic:string[], templateName: string){
        super(name,"Imagem","None",null,true,false,templateName);
        this.BuildDictionary();
    }

    protected BuildDictionary(): void {
        let A = "A".charCodeAt(0);
        let Z = "Z".charCodeAt(0);

        for (let i = 0; i < 26; i++) {
            this.DicCypher.set(String.fromCharCode(A + i), this.pictureDic[i]);
        }
    }

    protected TranslateCypher(text: string, password: string): string{        
       let trans = '';

        let A = "A".charCodeAt(0);
		let Z = "Z".charCodeAt(0);

		 for(let i =0;i < text.length; i++){
			let chr = text[i];

			if (chr.charCodeAt(0) >= A && chr.charCodeAt(0) <= Z) {
				trans += "<img src='"+ this.DicCypher.get(chr)+"' />";
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

    protected TranslateDecypher(text: string, password: string): string{
         throw Error("Not Implemented");
    } 
}   