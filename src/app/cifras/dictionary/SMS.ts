
import { CifraDictionary } from "../../../app/cifras/dictionary/CifraDictionary";

export class SMS extends CifraDictionary {
    constructor() {
        super("SMS", "None", null, "sms.html");
        
    }

    protected BuildDictionary(): void {
        let A = "A".charCodeAt(0);
        let dic = [
            "2", "22", "222", 
            "3", "33", "333", 
            "4", "44", "444", 
            "5", "55", "555", 
            "6", "66", "666", 
            "7", "77", "777", "7777", 
            "8", "88", "888",
            "9", "99", "999", "9999"
        ];

        for (let i = 0; i < dic.length; i++) {
            this.DicCypher.set(String.fromCharCode(A + i), dic[i]);
            this.DicDecypher.set(dic[i], String.fromCharCode(A + i));
        }
    }
}

