import { Injectable } from '@angular/core';
import { Task, MyDB } from './tasks';
import { openDB } from 'idb';


const db = openDB<MyDB>('my-db', 1, {
  upgrade(db) {
    const store = db.createObjectStore('taskStore',
      {
        keyPath: '_id',
        autoIncrement: true
      });

  },
});


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor() { }

  getAll = async function () {
    const value = (await db).getAll('taskStore');
    return value;
  };

  addTask = async function (task: Task) {
    task.isDone = false;
    const id = (await db).add('taskStore', task);
    return id;
  };

  deleteTask = async function (task: Task) {
    if (task._id) {
      (await db).delete('taskStore', task._id);
    }
    return task;
  };


  toggleTask = async function (task: Task) {
    (await db).put('taskStore', task);
    return task;
  };
}
