import { Component, Input, OnInit } from '@angular/core';
import { AutoCompleteService } from '../../auto-complete.service';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
})
export class ChipItemComponent implements OnInit {
  @Input() value: string = '';

  constructor(private readonly service: AutoCompleteService) {}

  ngOnInit(): void {}

  public removeChip(event: any) {
    this.service.removeChip(this.value);
  }
}
