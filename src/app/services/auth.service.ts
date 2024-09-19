import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isConnected: boolean = true;

  // subject
  isConnectedSubject$: Subject<boolean> = new Subject<boolean>();

  // behaviorsubject
  isConnectedBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected);

  constructor () { }

  login (): void {
    this.isConnected = true;
    this.isConnectedSubject$.next(this.isConnected);
    this.isConnectedBehaviorSubject$.next(this.isConnected);
  }
  
  logout (): void {
    this.isConnected = false;
    this.isConnectedSubject$.next(this.isConnected);
    this.isConnectedBehaviorSubject$.next(this.isConnected);
  }

  get isAuthenticated (): boolean {
    return this.isConnected;
  }

}
