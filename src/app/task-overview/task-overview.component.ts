import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.css']
})
export class TaskOverviewComponent implements OnInit {

  private taskName;
  private newTask;

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    this.taskService.add(this.taskName).then(() => {
      return this.getTasks();
    }).then(() => {
      this.newTask = ''; // clear input form value
    });
  }

  deleteTask(taskId: number) {
    // not implemented yet
  }

}
