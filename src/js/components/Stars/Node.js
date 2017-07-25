import React, { Component } from 'react'

export default class StarNode extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)

		this.styles = {
			top: `${this.props.top}%`,
			left: `${this.props.left}%`
		}
	}

	handleClick(e) {
		e.stopPropagation()
		
		new Promise((resolve, reject) => {
			this.props.activate(this.props.number, resolve())
		}).then(() => {
		})

	}


	render() {
		const links = this.props.links.map((el, i) => {
			return <li key={i}><a href={el.address} >{el.title}</a></li>
		})

		return(
			<div class='star-container' style={this.styles}>
				<div class='star' onClick={this.handleClick}>
					<i class={this.props.icon}></i>
				</div>
				<div class={ `star-menu ${this.props.active ? 'active' : ''}` }>
					<ul>
						{links}
					</ul>
				</div>
			</div>
		)
	}
}
