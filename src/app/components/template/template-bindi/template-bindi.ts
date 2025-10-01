import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-bindi',
  imports: [CommonModule],
  templateUrl: './template-bindi.html',
  styleUrl: './template-bindi.scss',
})
export class TemplateBindi {
  public name = 'William Filho';
  public age = 30;
  public condition = this.age < 1 ? 'teste' : 'teste2';
  public isDisabled = false;
  public srcValue = 'https://angular.io/assets/images/logos/angular/angular.png';
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }
}
