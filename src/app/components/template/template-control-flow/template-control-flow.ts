import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [CommonModule],
  templateUrl: './template-control-flow.html',
  styleUrl: './template-control-flow.scss',
})
export class TemplateControlFlow {
  public isTrue = false;

  //Switch case Testar valores
  public switichCondition = 'C';

  //Mostar os dados de um array
  public itens = [{ name: 'William Filho' }];

  //Array para exemplificar o uso do @for com @empty
  //public itens: Array<{ name: string }> = [];

  // Simula uma requisição HTTP, Observable que emite um array de strings após 3 segundos, ele funcina de forma similar a um *ngIf com async
  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3', 'item 4']).pipe(
    delay(3000)
  );

  // Função de trackBy
  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    this.itens.push({ name: value });
  }
}
