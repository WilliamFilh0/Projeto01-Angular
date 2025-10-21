import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';

@Component({
  selector: 'app-template-deferrable-views',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.html',
  styleUrl: './template-deferrable-views.scss',
})
export class TemplateDeferrableViews {}
