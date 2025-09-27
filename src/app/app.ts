import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NewComponent],
  template: `<h1>Curso de Angular</h1>
    <app-new-component /> `,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
