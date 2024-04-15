import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  setValue = (val: number) => {
    this.value$.next(val)
  }
}
