import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  private chipList$: BehaviorSubject<string[]>;
  private click$: Subject<boolean>;
  constructor() {
    this.chipList$ = new BehaviorSubject<string[]>([]);
    this.click$ = new Subject<boolean>();
  }

  public get chipList(): Observable<string[]> {
    return this.chipList$.asObservable();
  }

  public addChips(chips: string[]) {
    const list = this.chipList$.value;
    list.push(...chips);
    this.chipList$.next(list);
  }

  public removeChip(value: string) {
    this.chipList$.next(this.chipList$.value.filter((el) => el != value));
  }

  public triggerClick() {
    this.click$.next(true);
  }

  public getWhenClicked(): Observable<boolean> {
    return this.click$.asObservable();
  }
}
