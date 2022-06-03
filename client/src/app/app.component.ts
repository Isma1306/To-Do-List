import { Component } from '@angular/core';
import { Task } from './tasks';
import { ApiClientService } from './api-client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  public tasks: Task[] = [];

  constructor(private db: ApiClientService) {

  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(x => x !== task);
  }

  ngOnInit(): void {
    this.db.getAll().then((tasks) => {
      this.tasks = tasks;
    });
  }

}
