import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.html',
  styleUrl: './template-deferrable-views.scss',
})
export class TemplateDeferrableViews {
  public isTrue = false;

  // Simula uma requisição HTTP, Observable que emite um array de strings após 3 segundos, ele funcina de forma similar a um *ngIf com async
  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3', 'item 4']).pipe(
    delay(3000)
  );
}
