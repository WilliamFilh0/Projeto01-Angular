import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss',
})
export class TemplateDrivenForms {
  public listaComidas = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'Xburguer',
      preco: 'R$ 10',
    },
    {
      comida: 'XSalada',
      preco: 'R$ 11',
    },
    {
      comida: 'Coxinha',
      preco: 'R$ 6',
    },
  ]);
}
