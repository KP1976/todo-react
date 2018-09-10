import React, { Component } from 'react';

class TaskDone extends Component {
	render() {
		return (
			<li className="task-done">
				<p className="task-done__name-task">
					Zrobić kilka projektów od tutoriala WesBosa
				</p>
				<p className="task-done__date-task">
					Data ukończenia:{' '}
					<span className="task-done__date-task-value">06.09.2018 r.</span>
				</p>
			</li>
		);
	}
}

export default TaskDone;
