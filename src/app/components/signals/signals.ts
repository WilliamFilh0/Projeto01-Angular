import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  public firstName = signal('William');
  public lastName = signal('Filho');

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  // Signals serve para gerenciar estados reativos de forma eficiente em aplicações Angular. Assim se eu mudar no valor de uma signal, todos os componentes ou computeds que dependem dessa signal serão automaticamente atualizados.

  public array = signal([1]);

  /* 
  Effect

  - Registro de dados sendo exibidos e quando eles mudam, seja para análise
  ou como ferramenta de depuração.

- Manter os dados sincronizados com o window.localStorage.

- Adicionando comportamento DOM personalizado que não pode ser expresso com
  sintaxe de modelo.

- Executar renderização personalizada em um <canvas>, biblioteca de gráficos
  ou outra biblioteca de UI de terceiros.*/

  constructor() {
    effect(() => {
      console.log(this.fullName());
      console.log(this.array());
    });
  }

  public updateName() {
    return this.firstName.set('Gustavo');
  }

  // Atualiza o array adicionando o número 2 E imprimindo o valor antigo no console, usando o método update.  Deve ser chamado ao clicar no botão "Update Array".
  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue);
      return [...oldValue, oldValue.length + 1];
    });
  }
}
