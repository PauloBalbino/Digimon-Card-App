import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ColorList, IColor, ITag, tagsList } from '../../../../models';
import { ObscenityPipe } from '../../../pipes/obscenity.pipe';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'digimon-deck-metadata',
  template: `
    <div class="mb-1 inline-flex w-full px-3">
      <div class="ml-auto mt-2 flex w-1/2 pr-2">
        <p-chip class="ml-auto" *ngFor="let tag of tags" label="{{ tag.name }}"></p-chip>
      </div>

      <div class="mt-2 w-1/2 pl-1">
        <input
          [(ngModel)]="titleInput"
          (ngModelChange)="this.titleChange.emit($event)"
          placeholder="Deck Name:"
          class="h-8 w-full text-sm"
          pInputText
          type="text" />
      </div>
    </div>

    <div class="mx-3.5 inline-flex w-full">
      <span class="mr-2 w-full">
        <textarea
          [(ngModel)]="descriptionInput"
          (ngModelChange)="this.descriptionChange.emit($event)"
          placeholder="Description:"
          class="h-[40px] w-full overflow-hidden md:h-[66px]"
          pInputTextarea></textarea>
      </span>
      <div class="mr-6 flex h-[40px] w-full flex-row justify-center border border-[#304562] md:h-[66px]">
        <div
          *ngFor="let deckBox of colors"
          class="h-full w-full cursor-pointer"
          [ngClass]="{
            'primary-background': selectedColor.name === deckBox.name,
            'surface-ground': selectedColor.name !== deckBox.name
          }">
          <img [src]="deckBox.img" alt="Deckbox" class="h-full" />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, ChipModule, FormsModule, InputTextModule, InputTextareaModule, NgClass],
})
export class DeckMetadataComponent implements OnChanges {
  @Input() title = '';
  @Input() description = '';
  @Input() tags: ITag[];
  @Input() selectedColor: any;

  @Output() titleChange = new EventEmitter<string>();
  @Output() descriptionChange = new EventEmitter<string>();
  @Output() tagsChange = new EventEmitter<ITag[]>();
  @Output() selectedColorChange = new EventEmitter<IColor>();

  titleInput = '';
  descriptionInput = '';

  tagsList: ITag[] = tagsList;
  colors = ColorList;

  private obscenity = new ObscenityPipe();

  ngOnChanges(changes: SimpleChanges) {
    if (!changes) {
      return;
    }
    if (changes['title']) {
      this.titleInput = this.obscenity.transform(this.title);
    }

    if (changes['description']) {
      this.descriptionInput = this.obscenity.transform(this.description);
    }
  }

  changeColor(color: any) {
    this.selectedColor = color;
    this.selectedColorChange.emit(color);
  }
}
