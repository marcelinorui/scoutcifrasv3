import { CifraBase } from "../../../app/cifras/CifraBase";

export class Metades extends CifraBase {
    constructor(protected num: number = 2) {
        super("Metades", "Texto", "Integer", 2, true, true,"metades.html");
    }

    protected BuildDictionary(): void {
        throw new Error("Method not implemented.");
    }

    protected BuildLines(): string[] {
        let line = [];
        for (let i = 0; i < this.num; i++) {
            line[i] = '';
        }
        return line;
    }

    protected TranslateCypher(text: string, password: string): string {
       let trans = '';
       this.num = this.GetIntRange(password,1,10);

        for (var i = 0; i < text.length; i++) {
            var chr = text.charAt(i);
            if (chr >= 'A' && chr <= 'Z') {
                trans += chr;
            }
        }

        let lines = this.BuildLines();

        for (var i = 0; i < trans.length; i++) {
            lines[i%this.num] += trans[i];
        }

        return lines.join(' ');
    }

    protected TranslateDecypher(text: string, password: string): string {
        let trans = '';
        let lines = text.split(' ');
        
        for(let i = 0; i< (text.length-lines.length+1); i++){
            let lin = i% lines.length;
            let idx = Math.floor(i/ lines.length);

            let chr = lines[lin][idx];
            if(chr) {
                trans += chr;
            }
        }

        return trans;
    }
}

// export class Metades2 extends Metades{
//    constructor(){
//        super(2);
//    }
// }


// export class Metades3 extends Metades{
//    constructor(){
//        super(3);
//    }
// }


// export class Metades4 extends Metades{
//    constructor(){
//        super(4);
//    }
// }


// export class Metades5 extends Metades{
//    constructor(){
//        super(5);
//    }
// }