import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoCompleteService } from '../auto-complete.service';

@Component({
  selector: 'app-auto-complete-element',
  templateUrl: './auto-complete-element.component.html',
  styleUrls: ['./auto-complete-element.component.scss'],
})
export class AutoCompleteElementComponent implements OnInit {
  @Input() value: string = '';
  constructor(private readonly service: AutoCompleteService) {}

  ngOnInit(): void {}

  public addChip(event: any) {
    event.stopPropagation();
    this.service.addChips([this.value]);
  }
}
