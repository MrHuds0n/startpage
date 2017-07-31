import React, { Component } from 'react'

export default class StarNode extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.handleSearch = this.handleSearch.bind(this)

		this.state = {
			x: this.props.left,
			y: this.props.top,
			destX: this.props.left,
			destY: this.props.top,
			startX: this.props.left,
			startY: this.props.top,

			styles: {
				top: `${this.props.top}%`,
				left: `${this.props.left}%`
			}
		}

	}

	componentDidMount() {
		this.animate = setInterval(this.tick.bind(this), 50)
		this.tick()
	}

	handleClick(e) {
		e.stopPropagation()

		new Promise((resolve, reject) => {
			this.props.activate(this.props.number, resolve())
		}).then(() => {
			if(this.props.search) {
				this.search.value = ''
				this.search.focus()
			}
		})
	}

	handleSearch(e) {
		e.preventDefault()

		const term = this.search.value.trim()

		const url = this.props.search.pattern.replace(/%s/, term)

		window.open(url)
	}

	tick() {
		if(!this.props.ready) {
			return
		}

		if(!this.props.active) { 
			let {x, y, destX, destY, startX, startY} = this.state

			if(Math.round(x) === destX && Math.round(y) === destY) {
				destX = Math.floor(Math.random() * 70) + 10
				destY = Math.floor(Math.random() * 70) + 10

				this.setState({
					destX,
					destY,
					startX: this.state.x,
					startY: this.state.y
				})
			}
			else {
				let distX = destX - startX
				let distY = destY - startY

				this.setState({
					x: x + (distX * .0005),
					y: y + (distY * .0005),

					styles: {
						top: `${this.state.y}%`,
						left: `${this.state.x}%`,
						zIndex: 2
					}
				})
			}
		}
		else {
			this.setState({
				styles: {
					top: `${this.state.y}%`,
					left: `${this.state.x}%`,
					zIndex: 100
				}
			})
		}
	}

	render() {
		const links = this.props.links.map((el, i) => {
			return <li key={i}><a href={el.address} >{el.title}</a></li>
		})

		//This makes it so that the search bar is not rendered if it's
		//not specified in JSON.
		
		//Adding a comment cause i'll forget what this does in 2 days.
		const search = this.props.search
			? <form onSubmit={this.handleSearch}>
				<input 
					type='text'
					placeholder={this.props.search.placeholder}
					ref={(i) => {this.search = i}}
				/>
			</form>
			: ''

		return(
			<div class='star-container' onClick={this.handleClick} style={this.state.styles}>
				<div class={`star ${this.props.active ? 'active' : ''}`} >
					<i class={this.props.icon}></i>
				</div>
				<div class={ `star-menu ${this.props.active ? 'active' : ''}` }>
					{search}
					<ul>
						{links}
					</ul>
				</div>
			</div>
		)
	}
}
