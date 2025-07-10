import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonService } from '../../person.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-person-page',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './add-person-page.html',
  styleUrl: './add-person-page.scss',
})
export class AddPersonPage {
  myForm: FormGroup;
  personService: PersonService = inject(PersonService);

  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      emso: ['', [Validators.required, Validators.minLength(13)]],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['+386'],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid) {
      if (this.myForm.value.phoneNumber === '+386') {
        console.log('here');
        this.myForm.value.phoneNumber = '';
      }

      this.personService.createUser(this.myForm.value).subscribe({
        next: (response) => console.log('User added!', response),
        error: (err) => console.error('Error when adding user!', err),
      });
      this.router.navigate(['/']);
    }
  }
}
