import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppCreateKittenComponent} from "./app-create-kitten/app-create-kitten.component";
import {AppListKittenComponent} from "./app-list-kitten/app-list-kitten.component";
import {Kitten} from "./models/kitten.model";
import {AppUserKittenComponent} from "./app-user-kitten/app-user-kitten.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCreateKittenComponent, AppListKittenComponent, AppUserKittenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  kittens: Kitten[] = [];
  userKittens: Kitten[] = [];

  onKittenCreated(newKitten: Kitten) {
    this.kittens.push(newKitten);
    console.log('Nouveau chaton ajouté :', newKitten);
  }

  adoptKitten(adoptedKitten: Kitten) {
    this.userKittens.push(adoptedKitten);
    this.kittens = this.kittens.filter(k => k !== adoptedKitten);
    console.log('Chaton adopté :', adoptedKitten);
  }
}
