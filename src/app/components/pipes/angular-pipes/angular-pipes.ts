import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

//Pipes Angular - Usando Pipes embutidos do Angular em um componente com signals ele serve para formatar datas, textos e JSON de forma reativa.
@Component({
  selector: 'app-angular-pipes',
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
  ],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.scss',
})
export class AngularPipes {
  public date = signal(new Date());
  public json = signal([{ name: 'William' }]);

  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3', 'item 4']).pipe(
    delay(3000)
  );
}
