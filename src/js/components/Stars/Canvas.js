import React, { Component } from 'react'

export default class StarCanvas extends Component {
	constructor(props) {
		super(props)

		this.framerate = 20

	}

	componentDidMount() {
		this.ticker = setInterval(this.tick.bind(this), 50)
		this.tick()

		//Opening animation
		this.$canvas = document.getElementById('stars')
		this.ctx = this.$canvas.getContext('2d')

		this.$stars = document.querySelectorAll('.star-container')
		this.stars = Array.from(this.$stars).map((el) => {
			return el.getBoundingClientRect()
		})

		const vertices = this.stars.map(el => {
			return {
				y: el.top + ((el.bottom - el.top) / 2),
				x: el.left + ((el.right- el.left) / 2)
			}
		})

		const points = waypoints(vertices, this.framerate)

		let vertex = 0
		let t = 1

		animate(this.ctx, this.$stars, this.props.handleInit)
		this.$stars[0].classList.add('active')
		function animate(ctx, nodes, callback) {

			if(t >= points[vertex].length - 1) {
				t = 1
				
				vertex++

				if(nodes[vertex]) {
					nodes[vertex].classList.add('active')
				}	
			}

			if(!points[vertex]) {
				callback.call()
				return
			}

			if(t<points[vertex].length && vertex<points.length) {
				requestAnimationFrame(() => animate(ctx, nodes, callback))
			}

			
			ctx.beginPath()
			ctx.moveTo(points[vertex][t-1].x, points[vertex][t-1].y)
			ctx.lineTo(points[vertex][t].x, points[vertex][t].y)
			ctx.stroke()

			t++
		}

		function waypoints(vertices, framerate) {
			let waypoints = []
			for(let i=1; i<vertices.length; i++) {
				let a = vertices[i-1]
				let b = vertices[i]

				let dx = b.x - a.x
				let dy = b.y - a.y
				
				waypoints[i-1] = []

				for(let j=0; j<=framerate+1; j++) {
					let x = a.x + dx*j / framerate
					let y = a.y + dy*j / framerate
					waypoints[i-1].push({x, y})    
				}
			}

			let a = vertices[vertices.length-1]
			let b = vertices[0]

			let dx = b.x - a.x
			let dy = b.y - a.y

			waypoints.push([])

			for(let j=0; j<=framerate+1; j++) {
				let x = a.x + dx*j / framerate
				let y = a.y + dy*j / framerate
				waypoints[waypoints.length-1].push({x, y})
			}

			return waypoints
		}
	}

	tick() {
		if(!this.props.ready) return
		
		this.stars = Array.from(this.$stars).map((el) => {
			return el.getBoundingClientRect()
		})

		const { $canvas, ctx, stars } = this

		ctx.clearRect(0, 0, $canvas.width, $canvas.height)

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
