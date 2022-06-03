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
    const response = (await db).add('taskStore', task);
    return response;
  };

  deleteTask = async function (task: Task) {
    if (task._id) {
      return (await db).delete('taskStore', task._id);
    }
  };

  toggleTask = async function (task: Task) {
    return (await db).put('taskStore', task);
  };
}
