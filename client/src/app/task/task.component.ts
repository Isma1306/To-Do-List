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

  public checked = false;
  public status: string = '';


  constructor(private http: ApiClientService) { }

  deleteMe() {
    if (this.task) {
      this.http.deleteTask(this.task);
      this.delete.emit(this.task);
    }
  }


  isChecked(checked: boolean) {
    this.checked = checked;
    if (checked) {
      this.status = 'success';
      return "line-through";
    }
    else {
      this.status = '';
      return "none";
    }

  }


  ngOnInit(): void {
  }

}
