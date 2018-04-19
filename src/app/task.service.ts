
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TASKS } from './mock-tasks';
import { Task } from './task';
import { MessageService } from './message.service';


@Injectable()
export class TaskService {

  private lastTaskId = 10 ;


  constructor(private messageService: MessageService) { }

  getTasks(): Observable<Task[]>  {
    this.messageService.add('TaskService: fetched tasks');
    return of(TASKS);
  }

  add(taskName: string) {
    return new Promise(resolve => {
      TASKS.push({ id: this.lastTaskId,  name: taskName, userId: 0, progress: 0 });
      this.messageService.add('TaskService: task ' + taskName + ' added');
      resolve({ id: this.lastTaskId,  name: taskName, userId: 0, progress: 0 });
    });
  }

}
