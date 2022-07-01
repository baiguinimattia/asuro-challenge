import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { programmingLanguages } from '../../consts/programming-languages.const';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, OnChanges {
  @Input() query: string = '';
  @Output() resultsEmitter: EventEmitter<string[]>;
  results: string[] = [];

  constructor() {
    this.resultsEmitter = new EventEmitter<string[]>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.results = programmingLanguages.filter((el: string) =>
      el.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  ngOnInit(): void {}
}
