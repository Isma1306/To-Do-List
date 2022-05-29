import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiClientService } from '../api-client.service';

import { Task } from '../tasks';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task?: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter();


  public status: string = '';
  public decoration: string = 'none';

  constructor(private http: ApiClientService) { }

  deleteMe() {
    if (this.task) {
      this.http.deleteTask(this.task);
      this.delete.emit(this.task);
    }
  }

  strike(isDone: boolean) {
    console.log('isDone :>> ', isDone);
    if (isDone) {
      this.decoration = "line-through";
    } else {
      this.decoration = "none";
    }

  }

  isChecked(checked: any) {

    if (this.task) {
      this.task.isDone = !this.task.isDone;
      this.http.toggleTask(this.task)
        .subscribe((response: Task) => {
          this.task = response;
          this.strike(response.isDone);
        });
    }

  }

  ngOnInit(): void {
  };

}
