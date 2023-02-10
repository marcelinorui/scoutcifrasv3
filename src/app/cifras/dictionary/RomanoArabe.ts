import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class RomanoArabe extends CifraDictionary {
    constructor() {
        super("Romano-Árabe", "None", null,"romano-arabe.html",  true);
    }

    protected BuildDictionary(): void {
        let A = "A".charCodeAt(0);
        let dic = [
            "I", "1", "2", "3",
            "II", "4", "5", "6",
            "III", "7", "8", "9", "10", "11",
            "IV", "12", "13", "14", "15", "16",
            "V", "17", "18", "19", "20", "21"
        ];

        for (let i = 0; i < dic.length; i++) {
            this.DicCypher.set(String.fromCharCode(A + i), dic[i]);
            this.DicDecypher.set(dic[i], String.fromCharCode(A + i));
        }
    }
}

