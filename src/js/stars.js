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
			},
			{
				'title': 'Gmail',
				'address': 'http://gmail.com'
			},
			{
				'title': 'Protonmail',
				'address': 'http://protonmail.com'
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
	},
	{
		top: rand(),
		left: rand(),
		name: 'Netrunner',
		icon: 'fa fa-laptop',
		search: {
			'pattern': 'https://netrunnerdb.com/find/?q=%s',
			'placeholder': 'Search NetrunnerDB'
		},
		links: [
			{
				'title': 'Jinteki',
				'address': 'http://jinteki.net'
			},
			{
				'title': 'NetrunnerDB',
				'address': 'http://netrunnerdb.com'
			},
			{
				'title': 'ANCUR',
				'address': 'http://ancur.wikia.com'
			},
			{
				'title': 'Meteor',
				'address': 'http://meteor.stimhack.com',
			},
			{
				'title': 'AlwaysBeRunning',
				'address': 'http://alwaysberunning.com'
			},
			{
				'title': '/tg/anrg',
				'address': 'http://4chan.org/tg/anrg'
			}
		]
	},
	{
		top: rand(),
		left: rand(),
		name: 'Freelancer',
		icon: 'fa fa-rocket',
		links: [
			{
				title: 'DiscoveryGC',
				address: 'http://discoverygc.com/forums'
			},
			{
				title: 'Server Rules',
				address: 'https://discoverygc.com/forums/showthread.php?tid=2334'
			},
			{
				title: 'Player List',
				address: 'https://discoverygc.com/forums/api_interface.php?action=players_online'
			}
		]
	}
]

function rand() {
	return Math.floor(Math.random() * 70) + 10
}
