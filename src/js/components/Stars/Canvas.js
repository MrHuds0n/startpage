import React, { Component } from 'react'

export default class StarCanvas extends Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.ticker = setInterval(this.tick.bind(this), 50)
		this.tick()
	}

	tick() {
		const $canvas = document.getElementById('stars')
		const ctx = $canvas.getContext('2d')

		ctx.clearRect(0, 0, $canvas.width, $canvas.height)

		const stars = Array.from(document.querySelectorAll('.star-container')).map((el) => {
			return el.getBoundingClientRect()
		})

		ctx.beginPath()
		for(let i=1; i<stars.length; i++) {
			const top1 = stars[i-1].top + calculateCentre(stars[i-1].top, stars[i-1].bottom) 
			const left1 = stars[i-1].left + calculateCentre(stars[i-1].left, stars[i-1].right) 
			const top2 = stars[i].top + calculateCentre(stars[i].top, stars[i].bottom) 
			const left2 = stars[i].left + calculateCentre(stars[i].left, stars[i].right) 

			ctx.moveTo(left1, top1)
			ctx.lineTo(left2, top2)
			ctx.stroke()
		}

		const top1 = stars[stars.length-1].top + calculateCentre(stars[stars.length-1].top, stars[stars.length-1].bottom) 
		const left1 = stars[stars.length-1].left + calculateCentre(stars[stars.length-1].left, stars[stars.length-1].right) 
		const top2 = stars[0].top + calculateCentre(stars[0].top, stars[0].bottom) 
		const left2 = stars[0].left + calculateCentre(stars[0].left, stars[0].right) 

		ctx.moveTo(left1, top1)
		ctx.lineTo(left2, top2)
		ctx.stroke()


	}

	render() {
		return(
			<canvas id="stars" width={window.innerWidth} height={window.innerHeight}>
			</canvas>
		)
	}
}

function calculateCentre(small, large) {
	let width = large - small
	return width/2
}
