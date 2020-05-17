import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeCharacter = false;
  includeNumber = false;
  includeSymbol = false;

  chars = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  symbols = '!@#$%^&*()[]{}';

  gen() {
    let validChars = '';
    if (this.includeCharacter) {
      validChars += this.chars;
    }
    if (this.includeNumber) {
      validChars += this.numbers;
    }
    if (this.includeSymbol) {
      validChars += this.symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let idx = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[idx];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  useCharacter() {
    this.includeCharacter = !this.includeCharacter;
  }

  useNumber() {
    this.includeNumber = !this.includeNumber;
  }

  useSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }
}
