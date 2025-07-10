import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import { PersonInterface } from '../../person.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-person-card',
  imports: [CommonModule, MatIconModule],
  templateUrl: './person-card.html',
  styleUrl: './person-card.scss',
})
export class PersonCard {
  person = input.required<PersonInterface>();
  personService: PersonService = inject(PersonService);

  @Output() deleted = new EventEmitter<Number>();

  get dateOfBirth(): string | undefined {
    return this.person().dateOfBirth
      ? new Date(this.person().dateOfBirth).toISOString().slice(0, 10)
      : undefined;
  }

  get dateOnly(): string | undefined {
    return this.person().createdAt
      ? new Date(this.person().createdAt).toISOString().slice(0, 10)
      : undefined;
  }

  get phoneNumber(): string | undefined {
    if (this.person().phoneNumber === null) return 'Not provided';
    else return this.person().phoneNumber;
  }

  onDelete() {
    if (this.person().id != null) {
      this.deleted.emit(this.person().id);
    }
  }
}
