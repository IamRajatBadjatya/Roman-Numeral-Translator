import { Component, OnInit } from '@angular/core';
import { ConversionLogicService } from '../conversion-logic.service';
@Component({
  selector: 'integer-to-roman',
  templateUrl: './integer-to-roman.component.html',
  styleUrls: ['./integer-to-roman.component.css']
})
export class IntegerToRomanComponent {
  convertedRomanValue: string | boolean;
  invalidInput: boolean;
  constructor(private serv: ConversionLogicService) {

  }
  callConvert(value: string) {
    this.invalidInput = false;
    if (!parseInt(value) || parseInt(value) > 3888) {
      this.invalidInput = true;
      this.convertedRomanValue = false;
    } else {
      this.convertedRomanValue = this.serv.toRoman(value);
    }
  }
}
