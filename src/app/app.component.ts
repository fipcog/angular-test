import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { TodolistsDeckComponent } from './components/todolists-deck/todolists-deck.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DirectivesComponent,
    TodolistsDeckComponent,
    AddTodoFormComponent,
    TestFormComponent,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-first';
}

