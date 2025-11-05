import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Componentes
//import { NewComponent } from './components/new-component/new-component';
// import { TemplateBindi } from './components/template/template-bindi/template-bindi';
//import { TemplateVariables } from './components/template/template-variables/template-variables';
//import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';
//import { TemplateDeferrableViews } from './components/template/template-deferrable-views/template-deferrable-views';
//import { Signals } from './components/signals/signals';
//import { AngularPipes } from './components/pipes/angular-pipes/angular-pipes';
import { ReactiveForms } from './components/forms/reactive-forms/reactive-forms';
// import { TemplateDrivenForms } from './components/forms/template-driven-forms/template-driven-forms';
import { PaiOuMae } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    //NewComponent,
    // TemplateBindi,
    // TemplateVariables,
    //TemplateControlFlow,
    //TemplateDeferrableViews,
    //Signals,
    //AngularPipes,
    ReactiveForms,
    // TemplateDrivenForms,
    PaiOuMae,
  ],

  template: `
    <!-- <app-new-component /> -->
    <!--    <app-template-bindi />-->
    <!--<app-template-variables /> -->
    <!--<app-template-control-flow /> -->
    <!--<app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!--     <app-pai-ou-mae />
    -->

    <h1>Curso de Angular</h1>
    <app-reactive-forms />
  `,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
