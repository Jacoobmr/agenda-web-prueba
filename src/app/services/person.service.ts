import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';
  apiUrl = 'https://agenda-api-cjmr.now.sh/api/persons';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getPersons() {
    return this.http.get(this.apiUrl);
  }

  addPerson(person) {
    return this.http.post(this.apiUrl, person);
  }
}
