import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AddPersonPage } from '../add-person-page/add-person-page';
import { PersonInterface } from '../../person.interface';
import { PersonService } from '../../person.service';
import { PersonCard } from '../../components/person-card/person-card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, PersonCard, RouterModule, MatIconModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  personsList: PersonInterface[] = [];
  filteredPersonsList: PersonInterface[] = [];
  personService: PersonService = inject(PersonService);

  handleUserDeleted(deletedId: Number) {
    this.personService.deleteUser(deletedId).subscribe(() => {
      this.filteredPersonsList = this.filteredPersonsList.filter(
        (p) => p.id !== deletedId
      );
      console.log('filtered list after delete:', this.filteredPersonsList);
    });
  }

  constructor() {
    this.personService.getAllUsers().subscribe((personsList) => {
      this.personsList = personsList;
      this.filteredPersonsList = personsList;
    });
  }
}
