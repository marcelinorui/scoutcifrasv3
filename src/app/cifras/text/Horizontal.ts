import { CifraBase } from "../CifraBase";

export class Horizontal extends CifraBase {    
    constructor(){
        super("Horizontal","Texto","Integer",3,true,true,"horizontal.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }   


    protected Translate(text:string){
        let trans = [];
        let num = <number>this.passwordField;

        let line = text.split(' ');
        for(let i = 0; i < line.length; i++){
            trans.push(this.reverseChunk(this.chunkString(line[i],num)).join(''));
        }       
        
        return trans.join(' ');
    }

    protected chunkString(text:string, length:number) : Array<string> {
         return <Array<string>>text.match(new RegExp('.{1,'+length+'}','g')); 
    }

    protected reverseChunk(chunk:Array<string>) : Array<string> {
        let rev : Array<string> = [];
        for(let i = 0; i < chunk.length; i++){
            rev[i] = chunk[i].split('').reverse().join('');
        }
        return rev;
    }

    protected TranslateCypher(text: string, password: string): string{
        return this.Translate(text);
    }

    protected TranslateDecypher(text: string, password: string): string{
         return this.Translate(text);
    } 

}