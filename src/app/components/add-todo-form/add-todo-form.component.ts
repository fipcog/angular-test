import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodolistApiService } from '../../services/todolistApiService/todolistApi.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoFormComponent {

  newTodoTitle: string = ''

  constructor(private todolistApi: TodolistApiService) { }

  createNewTodo() {
    this.todolistApi.createTodo(this.newTodoTitle)
      .subscribe()
  }
}
