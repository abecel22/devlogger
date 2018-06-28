import { Injectable } from '@angular/core';
import { BehaviorSubject, ObservableInput } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Genrated component',
        date: new Date('12/27/2017 12:54:23')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/27/2017 9:24:24')
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('12/27/2017 10:14:27')
      }
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
