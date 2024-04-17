import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, Todolist } from './todolistApiInterfaces';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistApiService {

  todolists$: BehaviorSubject<Todolist[]> = new BehaviorSubject<Todolist[]>([])

  options = {
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todolist[]>(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      this.options
    )
      .subscribe((res) => {
        this.todolists$.next(res)
      })
  }

  createTodo(title: string) {
    return this.http.post<BaseResponse<{ item: Todolist }>>(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      { title },
      this.options
    )
      .pipe(map(res => {
        const newTodo = res.data.item
        const storeTodos = this.todolists$.getValue()
        return [newTodo, ...storeTodos]
      }))
      .subscribe(todos => this.todolists$.next(todos))
  }

  updateTodo(todoId: string, title: string) {
    return this.http.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      { title },
      this.options)
      .pipe(map(res => {
        return this.todolists$.getValue().map(
          td => td.id === todoId ? { ...td, title } : td
        )
      }))
      .subscribe(todos => this.todolists$.next(todos))
  }

  deleteTodo(todoId: string) {
    return this.http.delete<BaseResponse>(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      this.options
    )
      .pipe(map(() => {
        const storeTodos = this.todolists$.getValue()
        return storeTodos.filter(td => td.id !== todoId)
      }))
      .subscribe(todos => this.todolists$.next(todos))
  }
}
