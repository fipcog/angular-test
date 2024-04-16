import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, Todolist } from './todolistApiInterfaces';

@Injectable({
  providedIn: 'root'
})
export class TodolistApiService {

  options = {
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todolist[]>(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      this.options
    )
  }

  createTodo(title: string) {
    return this.http.post<BaseResponse<{ item: Todolist }>>(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      { title },
      this.options
    )
  }

  updateTodo(todoId: string, title: string) {
    return this.http.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      { title },
      this.options)
  }

  deleteTodo(todoId: string) {
    return this.http.delete<BaseResponse>(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      this.options
    )
  }
}
