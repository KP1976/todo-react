import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload.id),
			};
		case 'DELETED_TASK':
			return {
				...state,
				deletedTasks: [action.payload, ...state.deletedTasks],
			};
		case 'ADD_TASK':
			return {
				...state,
				tasks: [action.payload, ...state.tasks],
			};
		case 'MODIFY_TASK':
			return {
				...state,
				tasks: state.tasks.map(task => {
					if (task.id === action.payload.modifiedId) {
						task.id = action.payload.id;
						task.text = action.payload.text;
						task.date = action.payload.date;
					}
					return task;
				}),
			};
		default:
			return state;
	}
};

class Provider extends Component {
	state = {
		tasks: JSON.parse(localStorage.getItem('tasks')) || [],
		deletedTasks: JSON.parse(localStorage.getItem('deletedTasks')) || [],
		dispatch: action => this.setState(state => reducer(state, action)),
		show: false,
		showModal: () => {
			this.setState({ show: true });
		},
		hideModal: () => {
			this.setState({ show: false });
		},
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export default Provider;

// Zamiast używać <Contex.Consumer></Contex.Consumer> będzie można użyć tylko <Consumer></Consumer>
export const Consumer = Context.Consumer;
