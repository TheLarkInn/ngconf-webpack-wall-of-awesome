import {Injectable, EventEmitter} from 'angular2/core';
import {AppState} from './app_state.service.ts';
import * as Firebase from 'firebase';
import * as _ from 'lodash';

@Injectable() 
export class TaskModel {
	private fbRef: Firebase;
	tasksUpdated = new EventEmitter<Task[]>();

	constructor(public appState: AppState) {
		this.fbRef = new Firebase(`${this.appState.state.firebaseUrl}tasks`);
		this.fbRef.on('value', (snapshot) => {
			const tasks = <Task[]>_.values(snapshot.val());
			this.tasksUpdated.emit(tasks);
		});
	}

	updateTask(task: Task) {
		this.fbRef.child(task.id).set(task);
	}
}