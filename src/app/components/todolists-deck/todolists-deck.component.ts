import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Todolist {
  addedDate: string
  id: string
  order: number
  title: string
}

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todolist[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true
    }).subscribe((res) => {
      this.todolists = [...res]
      console.log(this.todolists)
    })
  }
}
