import React, { Component } from 'react'

import Greeter from './Greeter'
import Clock from './Clock'
import Star from './StarNode'
import Canvas from './StarCanvas'

import stars from '../stars.json'

export default class Layout extends Component {
	constructor() {
		super()

		this.stars = stars
	}

	componentDidMount() {
		setInterval(this.tick, 5000)
	}

	tick() {

	}

	render() {

		const nodes = this.stars.map((el, i) => {
			return <Star key={i} id={`star${i}`} top={el.top} left={el.left} icon={el.icon} />
		})

		return(
			<div class='wrapper'>
				<Greeter />

				{nodes}	

				<Canvas stars={this.stars} />

				<div class="clocks">
					<Clock tz='America/New_York' />
					<Clock tz='UTC' />
					<Clock tz='Europe/Warsaw' />
					<Clock tz='Asia/Tokyo' />
				</div>
			</div>
		)
	}
}
