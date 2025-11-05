import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})

/*
FormControl
É um campo individual do seu formulário.
Pensa assim: cada caixinha que você preenche é um FormControl.


FormGroup
É um grupo de FormControls. É tipo uma pasta que organiza vários campos juntos.

É uma lista de FormControls ou FormGroups que pode crescer ou diminuir dinamicamente.
Pensa assim: é tipo uma lista de tarefas onde você pode adicionar ou remover itens.
*/
export class ReactiveForms {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: [''],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJS'],
    }),
    myFavoriteFoods: this.#fb.array([['X-tudo']]),
  });

  //public profileForm: FormGroup;

  // Exemplo com FormBuilder
  /* constructor(private _fb: FormBuilder) {
    this.profileForm = this._fb.group({
      name: [''],
      myStacks: this._fb.group({
        front: ['Angular'],
        back: ['NodeJS'],
      }),
      myFavoriteFoods: this._fb.array([['X-tudo']]),
    });
  }
*/

  // Exemplo sem FormBuilder
  // public profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   myStacks: new FormGroup({
  //     front: new FormControl('Angular'),
  //     back: new FormControl('NodeJS'),
  //   }),
  //   myFavoriteFoods: new FormArray([new FormControl('X-tudo')]),
  // });

  //name = new FormControl('');

  // Atualizando valores em um FormGroup usando patchValue (Atualiza apenas os campos fornecidos)
  public update() {
    this.profileForm.patchValue({
      name: 'William',
      myStacks: {
        front: 'VueJS',
        back: 'NextJS',
      },
    });
  }

  // Adicionando valores dinamicamente em um FormArray
  public addFavoriteFood(newFodd: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFodd);

    myFavoriteFoods.push(addNewFood);
  }
}
