import {Component, ViewEncapsulation} from 'angular2/core'
import {AppState} from './app_state.service.ts';
import {TaskModel} from './task.model.ts';
import {TaskBox} from './taskbox.component.ts';
import {sortedByVotes} from './utils.ts';

@Component({
	selector: 'app',
	pipes: [],
	providers: [TaskModel],
	directives: [TaskBox],
	styles: [require('./styles.css')],
	encapsulation: ViewEncapsulation.None,
	template: `
		<div class="toptask-container">
			<task-box [task]="task" (vote)="voteForTask(task, $event)" *ngFor="#task of tasks">
			</task-box>
		</div>
	`
})
export class App {
	tasks:Task[];

	constructor(private model:TaskModel, public appState:AppState) {
		model.tasksUpdated.subscribe((tasks:Task[]) => {
			this.tasks = sortedByVotes(tasks);
		});
	}

	voteForTask(task, vote) {
		task.votes += vote;
		this.model.updateTask(task);
	}
}
