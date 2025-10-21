import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Componentes
//import { NewComponent } from './components/new-component/new-component';
//import { TemplateBindi } from './components/template/template-bindi/template-bindi';
//import { TemplateVariables } from './components/template/template-variables/template-variables';
import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';
import { TemplateDeferrableViews } from './components/template/template-deferrable-views/template-deferrable-views';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    //NewComponent,
    //TemplateBindi,
    // TemplateVariables,
    TemplateControlFlow,
    TemplateDeferrableViews,
  ],

  template: `
    <!-- <app-new-component /> 
    <!-- <app-template-bindi /> -->
    <!--<app-template-variables /> -->
    <!--<app-template-control-flow /> -->

    <h1>Curso de Angular</h1>
    <app-template-deferrable-views />
  `,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
