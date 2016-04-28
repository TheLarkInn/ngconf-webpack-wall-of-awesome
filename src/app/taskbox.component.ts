import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'task-box',
	template: `
		<div class="topcat-box" title="{{task.description}}">

			<div class="topcat-rating-controls">
				<a (click)="upvote()">
					<i class="fa fa-thumbs-up"></i>
				</a>

				<a (click)="downvote()">
					<i class="fa fa-thumbs-down"></i>
				</a>

				<span class="topcat-votes">
					<i class="fa fa-heart"></i>{{task.votes}}
				</span>
			</div>
		</div>
	`
})
export class TaskBox {
	@Input() task:Task;
	@Output() vote = new EventEmitter<number>();

	constructor() {
	}

	upvote() {
		this.vote.emit(1);
	}

	downvote() {
		this.vote.emit(-1);
	}
}
