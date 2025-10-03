import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Componentes
import { NewComponent } from './components/new-component/new-component';
import { TemplateBindi } from './components/template/template-bindi/template-bindi';
import { TemplateVariables } from './components/template/template-variables/template-variables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindi, TemplateVariables],

  template: `
    <h1>Curso de Angular</h1>
    <!-- <app-new-component /> -->
    <!-- <app-template-bindi /> -->
    <app-template-variables />
  `,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
