import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-bindi',
  imports: [CommonModule, FormsModule],
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

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clietX: event.clientX,
      clientY: event.clientY,
    });
  }
}
