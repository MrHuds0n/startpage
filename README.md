# startpage
A startpage design built on React

## Setup

```
$ git clone https://github.com/MrHuds0n/startpage
$ cd startpage
$ yarn
$ yarn dev

# do your changes

$ yarn build
```

Link to `src/index.html` for your output file. The output only needs the four files in the `page` branch.

## Customisation

This is a relatively personal project and as such I didn't bother with making configurations easy to do (aside from the links). If you want to change things, though, here are a few parts of the code you might find interesting.

### `src/js/stars.js`

This is a config file for all links. It's a JSON array with each element having the following structure:
```javascript
{ //one object per star
		'top': Number, //distance in percent from the top of the page, can be set to rand() for random
		'left': Number, //distance in percent from the left of the page, rand() as above
		'name': String, //title, not used for anything
		'icon': String, //class string (for example 'fa fa-rocket' for icons
		'search': { //if this object doesn't exist, the search bar will not be rendered
			'pattern': String, //pattern used for search, %s is the substitute
			'placeholder': String //placeholder in the search input
		},
		'links': [ //one object per link
			{
				'title': String, //title of the link
				'address': String //address to the link
			}/*,
      {
        ...
      }*/
		]
	}
```

### `src/js/components/Stars/Canvas.js`

```javascript
this.framerate = 30
```

This is the only easily customiseable element in this file. This affects the speed of the initial drawing animation of all the lines. The unit is relatively arbitrary, represents the number of subsegments each segment between two stars will be divided into. In practice, the lower the number, the faster the drawing. Can be set to 0 to make the stars appear instantly.

### `src/js/components/Stars/Nodes.js`

```javascript
this.setState({
					x: x + (distX * .0005),
					y: y + (distY * .0005),
          //...
```

The `.0005` in this section represent how fast or slow the nodes will randomly move around after the drawing animation is complete. The more this multiplier is close to 0, the slower they'll move. Set to 0 to disable (although this might be bad for performance, you might as well delete the interval setter).
