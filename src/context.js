import React, { Component } from 'react';

const Context = React.createContext();

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
