import { Injectable } from '@angular/core';

@Injectable()
export class ConversionLogicService {
  digits: string[];
  roman_num: string;
  key: string[];
  count: number;
  constructor() { }
  toRoman(value: string): string {
    //checking entered input is valid 
    this.digits = String(+value).split("");
    this.key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    this.roman_num = "",
      this.count = 3;
    //converting last three digits of number to roman
    while (this.count--)
      this.roman_num = (this.key[+this.digits.pop() + (this.count * 10)] || "") + this.roman_num;
    //adding M for remaining digits
    return new Array(+this.digits.join("") + 1).join("M") + this.roman_num;
  }
}
