import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private currentModeSubject = new BehaviorSubject<string>('dark');
  currentMode = this.currentModeSubject.asObservable();

  constructor() {}

  getCurrentModeValue(): string {
    return this.currentModeSubject.value;
  }

  toggleCurrentMode(): void {
    const updatedCurrentModeValue =
      this.currentModeSubject.value === 'dark' ? 'light' : 'dark';

    this.currentModeSubject.next(updatedCurrentModeValue);
  }
}
