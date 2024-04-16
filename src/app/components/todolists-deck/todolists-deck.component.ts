import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todolist } from '../../services/todolistApiService/todolistApiInterfaces';
import { TodolistApiService } from '../../services/todolistApiService/todolistApi.service';


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
  todolists: Todolist[] = []

  constructor(
    private todolistApi: TodolistApiService
  ) { }

  ngOnInit() {
    this.getTodos()
  }

  options = {
    withCredentials: true
  }

  getTodos() {
    this.todolistApi.getTodos()
      .subscribe({
        next: (res) => {
          this.todolists = [...res]
        },
      })
  }

  createTodo(title: string) {
    this.todolistApi.createTodo(title)
      .subscribe((res) => {
        this.todolists = [res.data.item, ...this.todolists]
      })
  }

  updateTodo(todoId: string, title: string) {
    this.todolistApi.updateTodo(todoId, title)
      .subscribe(() => {
        this.todolists = this.todolists.map(
          td => td.id === todoId ? { ...td, title } : td
        )
      })
  }

  deleteTodo(todoId: string) {
    this.todolistApi.deleteTodo(todoId)
      .subscribe(() => {
        this.todolists = this.todolists.filter(td => td.id !== todoId)
      })
  }
}

