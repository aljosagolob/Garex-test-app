import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-add-person-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-person-page.html',
  styleUrl: './add-person-page.scss',
})
export class AddPersonPage {
  myForm: FormGroup;
  personService: PersonService = inject(PersonService);

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      emso: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      dateOfBirth: ['2000-01-01'],
      email: ['', [Validators.required, Validators.email]],
      phone: ['+386'],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.myForm.value.phone === '+386') {
        this.myForm.value.phone = '';
      }

      this.personService.createUser(this.myForm.value).subscribe({
        next: (response) => console.log('User added!', response),
        error: (err) => console.error('Error when adding user!', err),
      });
    }
  }
}
