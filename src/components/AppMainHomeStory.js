const header = {
	props: ['sublinkname'],
	template: `
		<h1 v-html="sublinkname"></h1>
	`
};

const AppMainHomeStory = {
	props: ['storyData', 'sublinkname'],
	data() {
		return {
			img: '<img class="panel_bottom" src="/full_BG_bottom.gif">'
		}
	}, 
	components: {
		'app-header': header
	}, 
	template: `
		<main class="home" id="content">
			<div id="col_full">
				<div class="panel_full">
					<p class="return">
						<a href="/">&lt; back</a>
					</p>

					<app-header v-bind:sublinkname="storyData[0].sublinkname"></app-header>
					<div v-html="storyData[0].content + img"></div>
				</div>
			</div>
		</main>
	`
}

module.exports = AppMainHomeStory;
