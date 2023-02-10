import { CifraBase } from "../CifraBase";

export class Vertical extends CifraBase {    
    constructor(){
        super("Vertical","Texto","Integer",3,true,true,"vertical.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }   


    protected Translate(text:string){
        let trans = [];
        let num = <number>this.passwordField;

        let line = text.split(' ');
        for(let i = 0; i < line.length; i++){
            let chunk = this.chunkString(line[i],num);
            let order = this.orderChunk(chunk,num);
            trans.push(order);
        }       
        
        return trans.join(' ');
    }

    protected chunkString(text:string, length:number) : Array<string> {
         return (<Array<string>>text.match(new RegExp('.{1,'+length+'}','g') ))
                .map((item) => { return (' '.repeat(length) + item ).slice(-length); })
                .map((item) => {return item.split('').reverse().join('');}); 
    }

    protected orderChunk(chunk:Array<string>, num: number) : string {
        let rev : string = '';
        for(let i = 0; i < num; i++)
		{
            rev += chunk.map( item => { 
                var chr = ''; 
                if(item[i]){ chr = item[i];}
                 return chr.trim();
            }).join('');            
        }
        return rev;
    }

    protected TranslateCypher(text: string, password: string): string{
        return this.Translate(text);
    }

    protected TranslateDecypher(text: string, password: string): string{
        // Rotate 3 times;
         return this.Translate(this.Translate(this.Translate(text)));
    } 

}