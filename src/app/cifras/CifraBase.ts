import { RemoveDiacritics } from "../helper/diacritics";
import { isAlphabetic, isIntegerInRange, isLetter, isNonnegativeInteger, isYear } from "../helper/validation";
import { ICifra } from "../interfaces/ICifra";
import { IScoutCifrasService } from "../interfaces/IScoutCifrasService";

export abstract class CifraBase implements ICifra {

    protected DicCypher: Map<string, string> = new Map();
    protected DicDecypher: Map<string, string> = new Map();
    public templateContent:string = "";

    constructor(
        public name: string,
        public type: "Imagem" | "Texto",
        public passwordFieldType: "Year" | "Char" | "String" | "Integer" | "None",
        public passwordField: number | string | null,
        public canCypher: boolean,
        public canDecypher: boolean,
        public templateName: string
    ) {
        
    }

    protected abstract BuildDictionary(): void;

    public Cypher(text: string, password: string): string {
        let input = text.toUpperCase();
        let pw = password.toUpperCase();
        input = RemoveDiacritics(input);
        pw = RemoveDiacritics(pw);
        if(this.passwordFieldType !== "None"){
            this.passwordField = pw;
        }
        return this.TranslateCypher(input, pw);
    }

    protected abstract TranslateCypher(text: string, password: string): string;

    public Decypher(text: string, password: string): string {
        let input = text.toUpperCase();
        let pw = password.toUpperCase();
        input = RemoveDiacritics(input);
        pw = RemoveDiacritics(pw);
        if(this.passwordFieldType !== "None"){
            this.passwordField = pw;
        }
        return this.TranslateDecypher(input, pw);
    }

    protected abstract TranslateDecypher(text: string, password: string): string;

  

    protected GetInteger(n: string ): number {
        if(isNonnegativeInteger(n)){
            return Number(n);
        }
        return 0;
    }

    protected GetYear(n: string): number{
        if(isYear(n)){
            return Number(n);
        }
        return 1942;
    }

    protected GetLetter(n: string): string{
        if(isLetter(n)){
            return n.toString().charAt(0);
        } 
        return 'J';
    }

    protected GetIntRange(n:string, min:number, max:number){
        if(isIntegerInRange(n,min,max)){
            return Number(n);
        }
        return 1;
    }   

    protected GetAlphabetic(n:string){
        if(isAlphabetic(n)){
            return n;
        }
        return '';
    }

    public CanDecypher(): boolean {
        return this.canDecypher;
    }

    public CanCypher(): boolean {
        return this.canCypher;
    }

    public hasHelp():boolean{
        return this.templateName !== null;
    }

    public hasPassword():boolean{
        return this.passwordFieldType !== 'None';
    }

    public GetHelpTemplate(service:IScoutCifrasService):void {
        if(this.hasHelp()===true){
            service
                .getTemplate(this.templateName)
                .then( (text) => this.templateContent = text );
        }
    }

    public GetHelpDebugDic(isCypher:number): string {
        
          let dic = isCypher === 0 ? this.DicCypher : this.DicDecypher;
          let html = '<table class="table table-condensed table-bordered">';
          html += "<tr>";
          Object.keys(dic).forEach((item) => { html += '<td class="text-center">' + item + '</td>'; });
          html += "</tr>";
          html += "<tr>";
          Object.values(dic).forEach((item) => { html += '<td class="text-center">' + item + '</td>'; });
          html += "</tr>";
          html += "</table>";
          return html;        
      }

   
}