import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { AutoCompleteService } from '../../auto-complete.service';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent implements OnInit, ControlValueAccessor {
  public chipList$: Observable<string[]>;

  constructor(private service: AutoCompleteService) {
    this.chipList$ = this.service.chipList.pipe(
      tap((chips: string[]) => this.writeValue(chips))
    );
  }

  onChange = (chips: string[]) => {};

  onTouched = () => {};

  writeValue(chips: string[]): void {
    this.onChange(chips);
  }

  registerOnChange(fn: (chips: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  public addChip(value: any) {
    this.service.addChips([value]);
  }
}
