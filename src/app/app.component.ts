import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScoutCifrasService } from 'src/app/ScoutCifrasService';
import { isLetter, isPositiveInteger, isYear } from './helper/validation';
import { ICifra } from './interfaces/ICifra';
import { IScoutCifrasOption } from './interfaces/IScoutCifrasOption';

@Component({
  selector: 'app-root',
  providers:[ScoutCifrasService],
  templateUrl: './templates/app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'scoutcifrasv3';

  options!: Array<IScoutCifrasOption>;
  selectedOption!: IScoutCifrasOption;

  showHelp: boolean = false;

  cifras!: Array<ICifra>;
  selectedCifra!: ICifra;

  textToCypher: string = '';
  cypheredText: string = '';
  passwordText: string = '';

  labelTextToCypher:string = '';
  labelCypheredText:string = '';

  helpHtml: string = 'help'
  constructor(private scoutCifrasService: ScoutCifrasService) { 
        
  }
  
  ngOnInit(): void {
    this.scoutCifrasService.getOptions().then(
      options => {
        this.options = options;
        this.selectedOption = options[0];
        this.onOptionChange(options[0]);
      }
    );
  }

  onOptionChange(option: IScoutCifrasOption) {
    this.selectedOption = option;
    this.scoutCifrasService.getCifras(this.selectedOption).then(cifras => {
      this.cifras = cifras;

      if (cifras && cifras.length > 0) {
        if (!cifras.find((item) => { return item === this.selectedCifra; })) {
          this.selectedCifra = cifras[0];
          if (this.selectedCifra.passwordFieldType !== "None") {
            this.passwordText = '' + this.selectedCifra.passwordField;
          }
        }
        this.onSelectedOptionTextToCipher();
        this.onSelectedOptionCypheredText();        
        this.TextCypher();
      }
    });
  }

  onCifraChange(cifra: ICifra) {
    this.selectedCifra = cifra;
    if (this.selectedCifra.passwordFieldType !== "None") {
      this.passwordText = '' + this.selectedCifra.passwordField;
    }
    this.TextCypher();
  }

  onPasswordChange(event: any ) {
    this.passwordText = event.currentTarget.value;
    this.TextCypher();
  }

  onTextToCypherChange(event: any) {
    this.textToCypher = event.currentTarget.value;
    this.TextCypher();
  }

  TextCypher() {
    if (this.selectedOption.value === 0) {
      this.cypheredText = this.selectedCifra.Cypher(this.textToCypher, this.passwordText);
    } else {
      this.cypheredText = this.selectedCifra.Decypher(this.textToCypher, this.passwordText);
    }
  }

  onShowHelp() {
    this.selectedCifra.GetHelpTemplate(this.scoutCifrasService);
    this.showHelp = true;
  }

  onHideHelp() {
    this.showHelp = false;
  }

  hasHelp():boolean{
    return this.selectedCifra.hasHelp();
  }

  hasPassword():boolean{
    return this.selectedCifra.hasPassword();
  }

  hasTemplate():boolean{
    return this.selectedCifra.hasHelp();
  }

  get cifraName():string{
    return this.selectedCifra.name;
  }

  get cifraTemplate():string{
    return this.selectedCifra.templateContent;
  }


  onSelectedOptionTextToCipher() {
    this.labelTextToCypher = this.selectedOption !== null ? (this.selectedOption.value === 0 ? "Cifrar" : "Decifrar") : "Cifrar";
  }

  onSelectedOptionCypheredText() {
    this.labelCypheredText = this.selectedOption !== null ? (this.selectedOption.value === 0 ? "Cifrado" : "Decifrado") : "Cifrado";
  }

  protected isValid(password: any): boolean {
    let pft = this.selectedCifra.passwordFieldType;
    if (pft !== "None") {
      if (pft === "Year") {
        return isYear(password);
      } else if (pft === "Char") {
        return isLetter(password);
      } else if (pft === "Integer") {
        return isPositiveInteger(password);
      }
    }
    return true;
  }

  public GetDebugDic(): string {
    if (this.selectedCifra != null && this.selectedOption != null) {
      return this.selectedCifra.GetHelpDebugDic(this.selectedOption.value);
    }
    return "";
  }
}
