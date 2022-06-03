import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiClientService } from '../api-client.service';
import { Task } from '../tasks';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public inputForm: FormGroup = new FormGroup({
    content: new FormControl(''),
  });


  @Input()
  tasks!: Task[];


  constructor(private db: ApiClientService) { }

  ngOnInit(): void {

  }

  handleSubmit(input: Task): void {
    this.db.addTask(input)
      .then(() => {
        this.tasks.push(input);
      });
  }

}
