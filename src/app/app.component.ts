import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lista-de-tarefas';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    //armazena o token no localStorage
    this.authService.getToquen().subscribe(
      token => localStorage.setItem('token', token.toString())
    )
  }

}


