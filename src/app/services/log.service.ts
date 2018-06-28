import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
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

  getLogs() {
    return this.logs;
  }
}
