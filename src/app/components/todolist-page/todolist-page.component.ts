import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todolist-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './todolist-page.component.html',
  styleUrl: './todolist-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistPageComponent { }
