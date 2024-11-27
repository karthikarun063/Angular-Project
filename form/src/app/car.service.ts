import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  private carNameSubject = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNameSubject.asObservable();

  addCarName(name: string) {
    const currentName =this.carNameSubject.getValue();
    const updatedName = [...currentName, name];
    this.carNameSubject.next(updatedName);
  }
}
