import React, { Component } from 'react'

import Greeter from './Greeter'
import Clock from './Clock'
import Star from './Stars/Node'
import Canvas from './Stars/Canvas'

import stars from '../stars.json'

export default class Layout extends Component {
	constructor() {
		super()

		this.stars = stars

		this.handleActivate = this.handleActivate.bind(this)

		this.state = {}
	}

	componentDidMount() {
		setInterval(this.tick, 5000)
	}

	tick() {
		//@TODO: SET UP ANIMATIONS
	}

	handleActivate(number) {
		this.setState({
			activeStar: number
		})
	}

	render() {
		const activeStar = this.state.activeStar
		const handleActivate = this.handleActivate
		const nodes = this.stars.map((el, i) => {
			return <Star 
				key={i}
				number={i}
				top={el.top}
				left={el.left}
				icon={el.icon}
				name={el.name}
				search={el.search}
				links={el.links}
				active={activeStar === i}
				activate={handleActivate}
			/>
		})

		return(
			<div class='wrapper' onClick={() => this.handleActivate(false)}>
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
