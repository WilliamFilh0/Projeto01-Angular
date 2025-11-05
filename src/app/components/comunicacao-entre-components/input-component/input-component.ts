import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
})

/*um componente Angular que recebe um valor via @Input() e o armazena em um signal chamado name.
O valor recebido é obrigatório e transformado para maiúsculas antes de ser salvo. */
export class InputComponent {
  public name = signal('Sem dados');

  @Input({
    required: true,
    transform: toUpperCase,
  })
  set inputName(value: string) {
    this.name.set(value);
  }
}
