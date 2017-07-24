import React, { Component } from 'react'
import moment from 'moment-timezone'

export default class Clock extends Component {
	constructor(props) {
		super(props)

		let icon = ''
		if(props.tz === 'America/New_York')
			icon = 'icon-us'
		else if(props.tz === 'UTC')
			icon = 'icon-uk'
		else if(props.tz === 'Europe/Warsaw')
			icon = 'icon-eu'
		else
			icon = 'icon-jp'

		this.state = {
			time: '00:00',
			icon: icon
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick()
		}, 1000)

		this.tick()
	}

	tick() {
		let now = moment()
		this.setState({
			time: now.tz(this.props.tz).format('HH:mm')
		})
	}

	render() {
		return(
			<div class="clock" title={this.props.tz}>
				<h3><i class={this.state.icon}></i> {this.state.time}</h3>
			</div>
		)
	}
}
