import React, { Component } from 'react';

class Task extends Component {
	state = {
		taskName: 'Zrobić kilka projektów od tutoriala WesBosa',
		date: '06.09.2018 r.',
	};

	render() {
		const { taskName, date } = this.state;

		return (
			<li className="task">
				<div className="task-texts">
					<p className="task-texts__name-task">{taskName}</p>
					<p className="task-texts__date-task">
						Data wstawienia:{' '}
						<span className="task-texts__date-task-value">{date}</span>
					</p>
				</div>
				<div className="task-icons">
					<div className="task-icons__modify-icon">
						<div className="task-icons__modify-icon--yellow-circle" />
					</div>
					<div className="task-icons__delete-icon">
						<div className="task-icons__delete-icon--red-cross" />
					</div>
				</div>
			</li>
		);
	}
}

export default Task;
