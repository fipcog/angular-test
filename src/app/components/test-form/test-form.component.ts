import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestFormComponent {


}
