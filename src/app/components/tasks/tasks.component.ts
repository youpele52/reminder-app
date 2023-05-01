import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/data/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // to use service you have to put it inside of a constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this here is like handling ppromises,
    // getTasks() is the fetch request
    // we subscribe to it, ....then when it is resolved we (re)set our above defined tasks in line11, to what we get from the promise
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
