import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-app-create-kitten',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './app-create-kitten.component.html',
  styleUrl: './app-create-kitten.component.scss'
})
export class AppCreateKittenComponent {

  @Output() kittenCreated = new EventEmitter<Kitten>();

  kittenForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.kittenForm = this.formBuilder.group({
      name: ['', Validators.required],
      race: ['', Validators.required],
      birthDate: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.kittenForm.valid) {
      const newKitten: Kitten = {
        name: this.kittenForm.value.name,
        race: this.kittenForm.value.race,
        birthDate: this.kittenForm.value.birthDate,
        image: this.kittenForm.value.image
      };

      this.kittenCreated.emit(newKitten);
      this.kittenForm.reset();
    }
  }
}
