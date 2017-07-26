import React, { Component } from 'react'

export default class StarNode extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.handleSearch = this.handleSearch.bind(this)

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


	render() {
		const links = this.props.links.map((el, i) => {
			return <li key={i}><a href={el.address} >{el.title}</a></li>
		})

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
			<div class='star-container' onClick={this.handleClick} style={this.styles}>
				<div class='star' >
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
