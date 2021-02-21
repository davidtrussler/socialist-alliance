const Vue = require('vue'); 
const fs = require('fs'); 
const { fetchData } = require('./db');
const AppHeader = require('./components/AppHeader'); 
const AppNav = require('./components/AppNav'); 
const AppMain = require('./components/AppMain'); 
const AppMainHome = require('./components/AppMainHome'); 
const AppMainHomeStory = require('./components/AppMainHomeStory'); 
const AppMainPanels = require('./components/AppMainPanels');
const AppFooter = require('./components/AppFooter'); 

function createSSRApp(url) {
	let content = '<p>Not Found</p>'; 
	let linkId = 0; 
	let sublinkId = 0; 
	let title = ''; 
	let mainComponent = AppMain; 
	let urlArray = [];

	if (url == '/') {
		linkId = 1;
	} else if (url.indexOf('?') > -1) {
		if (url.indexOf('&') > -1) {
			urlArray = url.split('?')[1].split('&');
		} else {
			urlArray = url.split('?')[1];
		}
	}

	if (urlArray.length > 0) {
		if (urlArray.length == 2) {
			linkId = urlArray[0].split('=')[1];
			sublinkId = urlArray[1].split('=')[1];
		} else {
			linkId = urlArray.split('=')[1];
		}
	}

	if (url === '/events') {
		content = fs.readFileSync('./src/content/Events.html', 'utf-8'); 
		title = 'Events'; 
	} else if (url === '/about') {
		content = fs.readFileSync('./src/content/About.html', 'utf-8'); 
		title = 'About Us'; 
	} else if (url === '/contact') {
		content = fs.readFileSync('./src/content/Contact.html', 'utf-8'); 
		title = 'Contact Us'; 
	} else if (url.indexOf('storyId') > -1) {
		let storyId = url.split('storyId=')[1]; 
		content = fs.readFileSync('./src/content/Story_' + storyId + '.html', 'utf-8'); 
		title = 'Home'; 
	} else if (linkId == 4) {
		title = 'Reports'; 

		if (sublinkId == 0) {
			content = fs.readFileSync('./src/content/Link_' + linkId + '.html', 'utf-8'); 
		} else {
			if (fs.existsSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html')) {
				content = fs.readFileSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html', 'utf-8');
			} else {
				content = '<p>Not Found</p>'; 
			}
		}
	}

	return new Promise((resolve, reject) => {
		if (linkId == 1) {
			title = 'Home';

			if (sublinkId == 0) {
				mainComponent = AppMainHome; 
			} else {
				mainComponent = AppMainHomeStory; 				
			}
		} else if (linkId == 2) {
			title = 'Left Unity';
			mainComponent = AppMainPanels;
		} else if (linkId == 3) {
			title = 'CNWP';
			mainComponent = AppMainPanels;
		}

		fetchData(linkId, sublinkId).then(data => {
			const app = Vue.createSSRApp({
				data() {
					return {storyData: data};
				},
				components: {
					'app-header': AppHeader, 
					'app-nav': AppNav, 
					'app-main': mainComponent, 
					'app-footer': AppFooter
				}, 
				template: `
					<!DOCTYPE html>
					<html lang="en-GB">
						<head>
							<title>Socialist Alliance | ${title}</title>
							<meta charset="utf-8"/>
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<link rel="stylesheet" type="text/css" href="/socAllPage.css">
							<script type="text/javascript" src="/jquery-1.4.1.min.js"></script>
							<script type="text/javascript" src="/socAllPage.js"></script>
						</head>

						<body class="${title}">
							<div id="wrap">
								<app-header></app-header>
								<app-nav 
									linkId='${linkId}' 
									url='${url}'
								></app-nav>
								<app-main 
									v-bind:storyData=storyData
									linkId='${linkId}'
									thisSublinkId='${sublinkId}'
								></app-main>
								<app-footer></app-footer>
							</div>
						</body>
					</html>
				`
			})

			resolve (app)
		});
	}).catch(reject => {
		console.log(reject);
	})
}

module.exports = createSSRApp;
