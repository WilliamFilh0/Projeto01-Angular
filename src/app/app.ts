import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Componentes
import { NewComponent } from './components/new-component/new-component';
import { TemplateBindi } from './components/template/template-bindi/template-bindi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindi],
  styles: [
    `
      h1 {
        color: darkblue;
      }
    `,
  ],
  template: `<h1>Curso de Angular</h1>
    <app-new-component />
    <app-template-bindi />`,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
