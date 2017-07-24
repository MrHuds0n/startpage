import React, { Component } from 'react'

export default class StarCanvas extends Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.ticker = setInterval(this.tick.bind(this), 5000)
		this.tick()
	}

	tick() {
		const $canvas = document.getElementById('stars')
		const ctx = $canvas.getContext('2d')

		ctx.clearRect(0, 0, $canvas.width, $canvas.height)

		for(let i=1; i<this.props.stars.length; i++) {
			const top1 = percentage(this.props.stars[i-1].top, $canvas.height)
			const left1 = percentage(this.props.stars[i-1].left, $canvas.width)
			const top2 = percentage(this.props.stars[i].top, $canvas.height)
			const left2 = percentage(this.props.stars[i].left, $canvas.width)

			ctx.beginPath()
			ctx.moveTo(left1, top1)
			ctx.lineTo(left2, top2)
			ctx.stroke()
		}


	}

	render() {
		return(
			<canvas id="stars" width={window.innerWidth} height={window.innerHeight}>
			</canvas>
		)
	}
}

function percentage(n, max) {
	console.log(n*max / 100)
	return(n*max) / 100
}
