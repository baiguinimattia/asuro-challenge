

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipListComponent } from './components/chip/chip-list/chip-list.component';
import { ChipItemComponent } from './components/chip/chip-item/chip-item.component';
import { ChipInputComponent } from './components/chip/chip-input/chip-input.component';

@NgModule({
  declarations: [
    ChipListComponent,
    ChipItemComponent,
    ChipInputComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule],
})
export class SharedModule {}
