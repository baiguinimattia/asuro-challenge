import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoCompleteService } from '../../auto-complete.service';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent implements OnInit {
  public chipList$: Observable<string[]>;

  constructor(private service: AutoCompleteService) {
    this.chipList$ = this.service.chipList;
  }

  ngOnInit(): void {}

  public addChip(value: any) {
    this.service.addChips([value]);
  }
}
