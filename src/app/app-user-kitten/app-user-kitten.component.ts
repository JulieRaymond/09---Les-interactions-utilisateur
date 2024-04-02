import {Component, Input} from '@angular/core';
import {Kitten} from "../models/kitten.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-app-user-kitten',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './app-user-kitten.component.html',
  styleUrl: './app-user-kitten.component.scss'
})
export class AppUserKittenComponent {
  @Input() kittens: Kitten[] = [];

}
