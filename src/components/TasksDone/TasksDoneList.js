import React from 'react';
import { Consumer } from '../../context';
import TaskDone from './TaskDone';

const TasksDoneList = () => {
	return (
		<Consumer>
			{value => {
				const { deletedTasks } = value;
				return (
					<ul className="tasks-done-list">
						{deletedTasks.map(deletedTask => (
							<TaskDone key={deletedTask.id} deletedTask={deletedTask} />
						))}
					</ul>
				);
			}}
		</Consumer>
	);
};

export default TasksDoneList;
