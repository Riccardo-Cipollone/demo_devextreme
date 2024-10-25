import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Project } from '../../proposal/business/entities/project.entity';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private dataSource: any[] = [
    {
      figure: 'JR Engineer Italy',
      actions: [
        { name: 'add', color: '#00ff00' },
        { name: 'event', color: '#0000ff' },
        { name: 'comment', color: '#ff8800' },
      ],
      area: null,
      hours: { tot: 85, scheduled: 85 },
      '7/10': 15,
      '14/10': 15,
      '21/10': 15,
      '28/10': 15,
      '04/11': 15,
      '11/11': 10,
      '18/11': 0,
      '25/11': 0,
      '02/12': 0,
      '09/12': 0,
      '16/12': 0,
      '23/12': 0,
    },
    {
      figure: 'JR Engineer India',
      actions: [
        { name: 'add', color: '#00ff00' },
        { name: 'event', color: '#0000ff' },
        { name: 'comment', color: '#ff8800' },
      ],
      area: null,
      hours: { tot: 85, scheduled: 85 },
      // '7/10': 15,
      // '14/10': 15,
      // '21/10': 15,
      // '28/10': 15,
      // '04/11': 15,
      // '11/11': 10,
      // '18/11': 0,
      // '25/11': 0,
      // '02/12': 0,
      // '09/12': 0,
      // '16/12': 0,
      // '23/12': 0,
    },
    {
      figure: '',
      actions: [{ name: 'remove', color: '#ff0000' }],
      area: 'Civil Eng / Bim',
      hours: { tot: 85, scheduled: 85 },
      '7/10': 15,
      '14/10': 15,
      '21/10': 15,
      '28/10': 15,
      '04/11': 15,
      '11/11': 10,
      '18/11': 0,
      '25/11': 0,
      '02/12': 0,
      '09/12': 0,
      '16/12': 0,
      '23/12': 0,
    },
    {
      figure: 'SR Engineer Italy',
      actions: [
        { name: 'add', color: '#00ff00' },
        { name: 'event', color: '#0000ff' },
        { name: 'comment', color: '#ff8800' },
      ],
      area: null,
      hours: { tot: 170, scheduled: 170 },
      // '7/10': 15,
      // '14/10': 15,
      // '21/10': 15,
      // '28/10': 15,
      // '04/11': 15,
      // '11/11': 10,
      // '18/11': 0,
      // '25/11': 0,
      // '02/12': 0,
      // '09/12': 0,
      // '16/12': 0,
      // '23/12': 0,
    },
    {
      figure: '',
      actions: [{ name: 'remove', color: '#ff0000' }],
      area: 'Civil Eng / Con. Safety',
      hours: { tot: 85, scheduled: 85 },
      '7/10': 15,
      '14/10': 15,
      '21/10': 15,
      '28/10': 15,
      '04/11': 15,
      '11/11': 10,
      '18/11': 0,
      '25/11': 0,
      '02/12': 0,
      '09/12': 0,
      '16/12': 0,
      '23/12': 0,
    },
    {
      figure: '',
      actions: [{ name: 'remove', color: '#ff0000' }],
      area: 'SW Eng / Industry 5.0',
      hours: { tot: 85, scheduled: 85 },
      '7/10': 15,
      '14/10': 15,
      '21/10': 15,
      '28/10': 15,
      '04/11': 15,
      '11/11': 10,
      '18/11': 0,
      '25/11': 0,
      '02/12': 0,
      '09/12': 0,
      '16/12': 0,
      '23/12': 0,
    },
  ];

  get source(): Observable<any[]> {
    var x: Project = {
      ...new Project(
        '',
        [],
        [],
        { tot: 40, scheduled: 0 },
        {
          '7/10': 15,
          '14/10': 15,
          '21/10': 15,
          '28/10': 15,
          '04/11': 15,
          '11/11': 10,
          '18/11': 0,
          '25/11': 0,
          '02/12': 0,
          '09/12': 0,
          '16/12': 0,
          '23/12': 0,
        }
      ),
    };

    console.log(x);

    return of(this.dataSource).pipe(delay(1000));
  }
}
