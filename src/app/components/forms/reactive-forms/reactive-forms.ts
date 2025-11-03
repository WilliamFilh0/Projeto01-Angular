import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  name = new FormControl('');

  public updateName() {
    this.name.setValue('Maria');
  }
}
