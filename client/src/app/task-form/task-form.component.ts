import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from '../api-client.service';
import { Task } from '../tasks';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public status: string = 'success';

  public inputForm: FormGroup = new FormGroup({
    content: new FormControl('', Validators.required)
  });


  @Input()
  tasks!: Task[];


  constructor(private db: ApiClientService) { }

  ngOnInit(): void {

  }

  handleSubmit(input: Task): void {
    if (this.inputForm.get('content')?.invalid) {
      this.status = 'warning';
    } else if (input.content) {
      this.db.addTask(input)
        .then((id: string) => {
          this.status = 'success';
          input._id = id;
          this.tasks.push(input);
          this.inputForm.reset();
        });
    }
  }
}
