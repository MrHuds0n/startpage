export default [
	{
		'top': rand(),
		'left': rand(),
		'name': 'Reddit',
		'icon': 'fa fa-reddit',
		'search': {
			'pattern': 'http://reddit.com/r/%s',
			'placeholder': 'Find a subreddit'
		},
		'links': [
			{
				'title': 'Reddit',
				'address': 'http://reddit.com'
			},
			{
				'title': 'Netrunner',
				'address': 'http://reddit.com/r/Netrunner'
			},
			{
				'title': 'linuxmasterrace',
				'address': 'http://reddit.com/r/linuxmasterrace'
			},
			{
				'title': 'unixporn',
				'address': 'http://reddit.com/r/unixporn'
			},
			{
				'title': 'clistuff',
				'address': 'http://reddit.com/r/clistuff'
			}
		]
	},
	{
		'top': rand(),
		'left': rand(),
		'name': 'Social',
		'icon': 'fa fa-users',
		'links': [
			{
				'title': 'Facebook',
				'address': 'http://facebook.com'
			},
			{
				'title': 'Twitter',
				'address': 'http://twitter.com'
			},
			{
				'title': 'YouTube',
				'address': 'http://youtube.com'
			}
		]
	},
	{
		'top': rand(),
		'left': rand(),
		'name': 'Coding',
		'icon': 'fa fa-code',
		'search': {
			'pattern': 'https://developer.mozilla.org/en-US/search?q=%s',
			'placeholder': 'Search MDN'
		},
		'links': [
			{
				'title': 'GitHub',
				'address': 'http://github.com'
			},
			{
				'title': 'GitLab',
				'address': 'http://gitlab.com'
			},
			{
				'title': 'MDN',
				'address': 'https://developer.mozilla.org/en-US/'
			},
			{
				'title': 'DevDocs',
				'address': 'http://devdocs.io'
			}
		]
	},
	{
		'top': rand(),
		'left': rand(),
		'name': '4chan',
		'icon': 'fa fa-leaf',
		'search': {
			'pattern': 'http://4chan.org/%s',
			'placeholder': '4chan board'
		},
		'links': [
			{
				'title': '/pol/',
				'address': 'http://4chan.org/pol'
			},
			{
				'title': '/bant/',
				'address': 'http://4chan.org/bant'
			},
			{
				'title': '/biz/',
				'address': 'http://4chan.org/biz'
			},
			{
				'title': '/tg/',
				'address': 'http://4chan.org/tg'
			},
			{
				'title': '/g/',
				'address': 'http://4chan.org/g'
			},
			{
				'title': '/b/',
				'address': 'http://4chan.org/b'
			}   
		]
	}
]

function rand() {
	return Math.floor(Math.random() * 70) + 10
}
