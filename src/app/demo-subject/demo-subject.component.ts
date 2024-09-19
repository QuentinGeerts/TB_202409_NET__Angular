import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-demo-subject',
  templateUrl: './demo-subject.component.html',
  styleUrl: './demo-subject.component.scss'
})
export class DemoSubjectComponent implements OnInit, OnDestroy {

  isConnected = false;

  constructor( private auth: AuthService ) { }

  ngOnInit (): void {
    // this.isConnected = this.auth.isAuthenticated;
    this.auth.isConnectedBehaviorSubject$.subscribe({
      next: (value: boolean) => this.isConnected = value
    })
  }

  ngOnDestroy (): void {
    // this.auth.isConnectedSubject$.unsubscribe();
    // this.auth.isConnectedBehaviorSubject$.unsubscribe();
  }

  login () {
    this.auth.login();
    // this.isConnected = this.auth.isAuthenticated;
  }

  logout () {
    this.auth.logout();
    // this.isConnected = this.auth.isAuthenticated;
  }

}
