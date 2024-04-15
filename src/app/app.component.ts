import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { TodolistsDeckComponent } from './components/todolists-deck/todolists-deck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivesComponent, TodolistsDeckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-first';
}
