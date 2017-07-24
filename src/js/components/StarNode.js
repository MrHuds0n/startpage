import React, { Component } from 'react'

export default class StarNode extends Component {
	constructor(props) {
		super(props)

		this.styles = {
			top: `${this.props.top}%`,
			left: `${this.props.left}%`
		}
	}

	render() {
		return(
			<div class='star' style={this.styles}>
				<i class={this.props.icon}></i>
			</div>
		)
	}
}
