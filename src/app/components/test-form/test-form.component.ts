import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      surname: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      nickname: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        Validators.required
      ]),
      address: new FormGroup({
        city: new FormControl('', Validators.maxLength(70)),
        street: new FormControl('', Validators.maxLength(70))
      }),
      additional: new FormGroup({
        age: new FormControl('', [Validators.min(16)]),
        birthday: new FormControl('', Validators.required)
      })
    })
  }

  isFieldInvalid(fieldName: string) {
    const field = this.testForm.get(fieldName)
    return field?.invalid && (
      field?.touched || field?.dirty
    )
  }

  checkFieldOnError(fieldName: string, validatorName: string) {
    const field = this.testForm.get(fieldName)
    return field?.errors?.[validatorName]
  }

  submitHandler() {
    console.log(this.testForm)
  }

  updateDefault() {
    this.testForm.patchValue({
      name: 'Artur',
      surname: 'Snitko',
      nickname: 'Nick',
      email: 'artur1992@gmail.com',
      address: {
        city: 'Minsk',
        street: 'Lenina 17'
      },
      additional: {
        age: '18',
        birthday: '1992-06-08'
      },
    })
  }
}
