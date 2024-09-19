import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  isConnectedSubject: boolean = false;
  isConnectedBehaviorSubject: boolean = false;

  constructor( private auth: AuthService ) { }

  ngOnInit (): void {

    // Subject
    // this.isConnectedSubject = this.auth.isAuthenticated;
    this.auth.isConnectedSubject$.subscribe({
      next: (value: boolean) => this.isConnectedSubject = value
    })

    // BehaviorSubject
    this.auth.isConnectedBehaviorSubject$.subscribe({
      next: (value: boolean) => this.isConnectedBehaviorSubject = value
    })

    // console.log(this.auth.isConnectedSubject$.getValue());
    // console.log(this.auth.isConnectedBehaviorSubject$.getValue());

  }

  ngOnDestroy (): void {
    this.auth.isConnectedSubject$.unsubscribe();
    this.auth.isConnectedBehaviorSubject$.unsubscribe();
  }

}
