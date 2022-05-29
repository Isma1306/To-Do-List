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


  constructor(private http: ApiClientService) { }

  ngOnInit(): void {

  }

  handleSubmit(input: Task): void {
    this.http.addTask(input)
      .subscribe((task: Task) => {
        this.tasks.push(task);
      });
  }

}
