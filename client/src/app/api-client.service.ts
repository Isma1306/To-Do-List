import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './tasks';

const url = 'http://localhost:3003/tasks';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(url);
    return tasks;
  }

  addTask(task: Task): Observable<Task> {
    const newTask = this.http.post<Task>(url, task);
    console.log('response :>> ', newTask);
    return newTask;
  }

}
