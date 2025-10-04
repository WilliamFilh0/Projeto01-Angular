import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';

@Component({
  selector: 'app-template-variables',
  imports: [NewComponent],
  templateUrl: './template-variables.html',
  styleUrl: './template-variables.scss',
})
export class TemplateVariables implements AfterViewInit {
  //Ele não é reativo, ou seja, se o valor do input mudar, a variável name não muda automaticamente
  // ViewChild é usado para acessar um elemento do template no TypeScript
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  @ViewChild(NewComponent) public childCOmponent!: NewComponent;
  // A interface AfterViewInit é usada para garantir que a view foi inicializada antes de acessar os elementos
  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childCOmponent.name);
  }
}
