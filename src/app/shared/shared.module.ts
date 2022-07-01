import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipListComponent } from './components/chip/chip-list/chip-list.component';
import { ChipItemComponent } from './components/chip/chip-item/chip-item.component';
import { ChipInputComponent } from './components/chip/chip-input/chip-input.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AutoCompleteElementComponent } from './components/auto-complete-element/auto-complete-element.component';

@NgModule({
  declarations: [ChipListComponent, ChipItemComponent, ChipInputComponent, AutoCompleteComponent, AutoCompleteElementComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipListComponent,
    ChipItemComponent,
    ChipInputComponent,
  ],
})
export class SharedModule {}
