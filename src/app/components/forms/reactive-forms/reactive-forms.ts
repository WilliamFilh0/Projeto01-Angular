import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJS'),
    }),
    myFavoriteFoods: new FormArray([new FormControl('X-tudo')]),
  });
  //name = new FormControl('');
  public update() {
    this.profileForm.patchValue({
      name: 'William',
      myStacks: {
        front: 'VueJS',
        back: 'NextJS',
      },
    });
  }

  public addFavoriteFood(newFodd: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFodd);

    myFavoriteFoods.push(addNewFood);
  }
}
