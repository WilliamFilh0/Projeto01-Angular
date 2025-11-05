import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input-component/input-component';
import { OutputComponent } from '../output-component/output-component';

@Component({
  selector: 'app-pai-ou-mae',
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.html',
  styleUrl: './pai-ou-mae.scss',
})
export class PaiOuMae {
  public name = signal('Dado diretamente do Pai ou Mãe');
  public outputNamePai = signal('Sem dados do Output');
}
