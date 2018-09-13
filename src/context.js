import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload),
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		tasks: [
			{
				id: 1,
				text: 'Zrobić coś z tym Todo',
				date: '15.04.2018',
			},
			{
				id: 2,
				text: 'Kolejny tekst do testowania',
				date: '18.04.2014',
			},
			{
				id: 3,
				text: 'Coś tam coś tam',
				date: '05.08.2016',
			},
		],

		dispatch: action => this.setState(state => reducer(state, action)),
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

// Zamiast używać <Contex.Consumer></Contex.Consumer> będzie można użyć tylko <Consumer></Consumer>
export const Consumer = Context.Consumer;
