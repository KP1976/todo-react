import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskDone extends Component {
	render() {
		const { text, date } = this.props.deletedTask;

		return (
			<li className="task-done">
				<p className="task-done__name-task">{text}</p>
				<p className="task-done__date-task">
					Data ukończenia:{' '}
					<span className="task-done__date-task-value">{date}</span>
				</p>
			</li>
		);
	}
}

TaskDone.propTypes = {
	deletedTask: PropTypes.object.isRequired,
};

export default TaskDone;
