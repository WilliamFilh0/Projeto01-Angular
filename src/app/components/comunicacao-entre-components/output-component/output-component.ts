import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  imports: [],
  templateUrl: './output-component.html',
  styleUrl: './output-component.scss',
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter();

  public sendOutputName() {
    this.outputName.emit('Dado enviado pelo Output do Filho');
  }
}
