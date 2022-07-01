import { Component, OnInit } from '@angular/core';
import { AutoCompleteService } from 'src/app/shared/components/auto-complete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly service: AutoCompleteService) {}

  ngOnInit(): void {}

  public click(event: any) {
    this.service.triggerClick();
  }
}
