import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { defaultInputValue } from 'src/app/shared/consts/default-input-value.const';
import { AutoCompleteService } from '../../auto-complete.service';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
})
export class ChipInputComponent implements OnInit, OnDestroy {
  private isFirstClick = true;
  public form: FormGroup;
  public subs$: Subscription;
  @Output() addChip: EventEmitter<string>;
  isActive: boolean = false;

  constructor(private fg: FormBuilder, private service: AutoCompleteService) {
    this.form = new FormGroup({ value: new FormControl(defaultInputValue) });
    this.addChip = new EventEmitter<string>();
    this.subs$ = new Subscription();

    this.form.valueChanges.subscribe({
      next(res) {
        console.log(res.value);
      },
    });
  }
  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  ngOnInit(): void {
    this.subs$.add(
      this.service
        .getWhenClicked()
        .pipe(
          tap((res) => {
            this.focusOutFunction();
          })
        )
        .subscribe()
    );
  }

  public removeDefaultValue(event: any) {
    event.stopPropagation();
    this.isActive = true;
    if (this.isFirstClick) {
      this.setControl = '';
      this.isFirstClick = !this.isFirstClick;
    }
  }

  public get getControl() {
    return this.form.controls['value'];
  }

  public get query(): string {
    return this.getControl.value;
  }

  public set setControl(value: string) {
    this.getControl.setValue(value);
  }

  public focusOutFunction(): void {
    if (this.getControl.value === '') {
      this.isFirstClick = !this.isFirstClick;
    }
    this.isActive = false;
  }

  public focusInFunction(): void {
    if (this.isFirstClick) {
      console.log('e groasa');
      this.setControl = '';
    }
    this.isActive = true;
  }

  public submit() {
    if (this.query) {
      this.addChip.emit(this.query);
      this.setControl = '';
    }
    this.isActive = true;
  }
}
