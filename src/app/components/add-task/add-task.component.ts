import { Component, Output, EventEmitter } from '@angular/core';
import { nanoid } from 'nanoid';
import { Task } from 'src/app/data/mock-tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  id: number | string = nanoid();
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = false;
  subscription: Subscription | unknown;

  onSubmit() {
    if (this.text.length <= 1) {
      alert('Please add more text');
      return;
    }
    const newTask: Task = {
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    // this will clear the form after submit
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.id = nanoid();
  }
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
