import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestFormComponent {
  testForm!: FormGroup

  ngOnInit() {
    this.testForm = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      nickname: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      }),
      additional: new FormGroup({
        age: new FormControl('18'),
        birthday: new FormControl('')
      })
    })
  }
}
