import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h1>Curso de Angular</h1> `,
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}

//<router-outlet />;
//  <router-outlet></router-outlet>
