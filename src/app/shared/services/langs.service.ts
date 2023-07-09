import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import portfolio from 'src/portfolio.json';
import { Langs } from '../models/langs.model';

@Injectable({
  providedIn: 'root',
})
export class LangsService {
  private currentLangSubject = new BehaviorSubject<Langs>('enUS');
  currentLang = this.currentLangSubject.asObservable();
  portfolio;

  constructor() {
    this.portfolio = this.getPortfolioBasedOnCurrentLang();

    this.currentLang.subscribe(() => {
      this.portfolio = this.getPortfolioBasedOnCurrentLang();
    });
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  getPortfolioBasedOnCurrentLang() {
    return portfolio[this.currentLangSubject.value];
  }

  changeCurrentLang(updatedLang: Langs) {
    this.currentLangSubject.next(updatedLang);
  }
}
