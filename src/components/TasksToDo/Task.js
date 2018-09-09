import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<li className="task">
				<div className="task-texts">
					<p className="task-texts__name-task">
						Zrobić kilka projektów od tutoriala WesBosa
					</p>
					<p className="task-texts__date-task">
						Data wstawienia:{' '}
						<span className="task-texts__date-task-value">06.09.2018 r.</span>
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