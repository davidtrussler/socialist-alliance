const Vue = require('vue'); 
const AppHeader = require('./components/AppHeader'); 
const AppNav = require('./components/AppNav'); 
const AppMain = require('./components/AppMain'); 

const createSSRApp = function() {
	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader, 
			'app-nav': AppNav, 
			'app-main': AppMain
		}, 
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>Socialist Alliance | Home</title>
					<meta charset="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" type="text/css" href="/socAllPage.css">
					<script type="text/javascript" src="/jquery-1.4.1.min.js"></script>
					<script type="text/javascript" src="/socAllPage.js"></script>
				</head>

				<body class="Home">
					<div id="wrap">
						<app-header></app-header>
						<app-nav></app-nav>
						<app-main></app-main>

						<div id="footer">
							<p>Alliance for Socialism, Internationalism, Republicanism, and the Environment and opposed to racism, fascism and specific oppressions</p>
							<img class="panel_bottom" src="/footer_BG_bottom.gif">
						</div>

						<div id="credits">
							<p>© Socialist Alliance 2020, web design: <a href="http://www.futurawebsites.com/" class="newWindow">futura websites</a></p>
						</div>
					</div>
				</body>
			</html>
		`
	})
}

module.exports = createSSRApp;
