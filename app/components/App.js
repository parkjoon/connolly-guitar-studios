import React from 'react';

export default class App extends React.Component {
	render() {
		return (
            <div className="body">
				{React.cloneElement(this.props.children, this.propsToPass)}
			</div>
		);
	}
}
