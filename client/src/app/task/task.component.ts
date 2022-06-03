import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiClientService } from '../api-client.service';

import { Task } from '../tasks';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskItem?: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter();


  public status: string = '';
  public decoration: string = 'none';

  constructor(private db: ApiClientService) { }

  deleteMe() {
    if (this.taskItem) {
      this.db.deleteTask(this.taskItem).then(() => this.delete.emit(this.taskItem));

    }
  }

  strike(isDone: boolean) {
    if (isDone) {
      this.decoration = "line-through";
    } else {
      this.decoration = "none";
    }

  }

  isChecked() {
    if (this.taskItem) {
      const newTask = Object.assign({}, this.taskItem);
      newTask.isDone = !this.taskItem.isDone;
      this.db.toggleTask(newTask).then((task) => {
        this.taskItem = task;
        this.strike(task.isDone);

      });
    }
  }

  ngOnInit(): void {
    if (this.taskItem) this.strike(this.taskItem.isDone);
  };

}
