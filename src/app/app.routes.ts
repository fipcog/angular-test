import { Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TodolistsDeckComponent } from './components/todolists-deck/todolists-deck.component';
import { Page404Component } from './components/page404/page404.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todolist-deck', pathMatch: 'full' },
  { path: 'directives', component: DirectivesComponent },
  { path: 'test-form', component: TestFormComponent },
  { path: 'todolist-deck', component: TodolistsDeckComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];
