import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kitten} from "../models/kitten.model";
import {AppCreateKittenComponent} from "../app-create-kitten/app-create-kitten.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-app-list-kitten',
  standalone: true,
  imports: [
    AppCreateKittenComponent,
    NgForOf
  ],
  templateUrl: './app-list-kitten.component.html',
  styleUrl: './app-list-kitten.component.scss'
})
export class AppListKittenComponent {
  @Input() kittens: Kitten[] = [];
  @Output() adoptedKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  adopt(kitten: Kitten) {
    this.adoptedKitten.emit(kitten);
  }
}
