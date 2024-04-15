import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todolists-deck',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './todolists-deck.component.html',
  styleUrl: './todolists-deck.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistsDeckComponent { }
