import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todolist } from '../../services/todolistApiService/todolistApiInterfaces';
import { TodolistApiService } from '../../services/todolistApiService/todolistApi.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todolists-deck',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './todolists-deck.component.html',
  styleUrl: './todolists-deck.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistsDeckComponent {
  todolists$!: Observable<Todolist[]>

  constructor(
    private todolistApi: TodolistApiService
  ) { }

  ngOnInit() {
    this.todolists$ = this.todolistApi.todolists$

    this.getTodos()
  }

  getTodos() {
    this.todolistApi.getTodos()
  }

  createTodo(title: string) {
    this.todolistApi.createTodo(title)
  }

  updateTodo(todoId: string, title: string) {
    this.todolistApi.updateTodo(todoId, title)
  }

  deleteTodo(todoId: string) {
    this.todolistApi.deleteTodo(todoId)
  }
}

