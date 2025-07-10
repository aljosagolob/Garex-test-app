import { Injectable } from '@angular/core';
import { PersonInterface } from './person.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  baseUrl = 'http://localhost:8080';

  getAllUsers(): Observable<PersonInterface[]> {
    return this.http.get<PersonInterface[]>(`${this.baseUrl}/person`);
  }

  createUser(person: PersonInterface): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/person/addPerson`, person);
  }

  deleteUser(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/person/deletePerson/${id}`);
  }

  constructor(private http: HttpClient) {}
}
