import React, { Component } from 'react'
import moment from 'moment'

export default class Greeter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			greeting: 'Welcome'
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick()
		}, 60000)

		this.tick()
	}

	tick() {
		const now = moment()
		const hour = now.hours()

		let greet = ''

		if(hour >= 5 && hour < 12)
			greet = 'Good Morning'
		else if(hour >= 12 && hour < 19)
			greet = 'Good Afternoon'
		else
			greet = 'Good evening'

		this.setState({
			greeting: greet
		})
	}

	render() {
		return(
			<div class="greeter">
				<h1>{this.state.greeting}</h1>
			</div>
		)
	}
}
