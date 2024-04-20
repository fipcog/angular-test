import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page404Component { }
