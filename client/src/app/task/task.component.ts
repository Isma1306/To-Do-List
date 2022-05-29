import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../tasks';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task?: Task;
  constructor() { }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  ngOnInit(): void {
  }

}
