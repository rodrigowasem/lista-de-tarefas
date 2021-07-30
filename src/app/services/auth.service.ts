import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  // é chamado quando o app-component inicializa
  getToquen() {
    return this.http.post('http://localhost:8000/auth/login', {
      "email": "nilson@email.com",
      "password": "nilson"
    });
  }
}
