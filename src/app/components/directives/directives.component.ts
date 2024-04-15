import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestService } from '../../services/Test.service';

interface Fruit {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent {
  fruits: Fruit[] = [
    { id: 1, name: 'apple', price: 18 },
    { id: 2, name: 'orange', price: 26 },
    { id: 3, name: 'watermealon', price: 30 },
    { id: 4, name: 'banana', price: 5 },
    { id: 5, name: 'pears', price: 12 },
    { id: 6, name: 'raspberries', price: 18 },
    { id: 7, name: 'avocados', price: 14 },
    { id: 8, name: 'mangoes', price: 3 },
    { id: 9, name: 'kiwifruit', price: 7 },
  ]
  value: number = 0
  constructor(private testSetvice: TestService) { }

  ngOnInit() {
    this.testSetvice.value$.subscribe((val: number) => {
      this.value = val
    })
  }

  setValueHandler = (e: Event) => {
    this.testSetvice.setValue(+(e.currentTarget as HTMLInputElement).value)
  }
}
