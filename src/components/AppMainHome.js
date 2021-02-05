const story = {
	props: ['sublinkname', 'sublinkid'],
	template: `
		<div class="story">
			<p class="storyHead" v-html="sublinkname"></p>
			<p class="storyLink">
				<a v-bind:href="'/?linkId=1&sublinkId=' + sublinkid">read article</a>
			</p>
		</div>
	`
};

const AppMainHome = {
	props: ['storyData'],
	components: {
		'app-story': story
	},
	template: `
		<main class="home" id="content">
			<div id="col_full">
				<div class="panel_full">
					<app-story
						v-for="story in storyData"
						v-bind:sublinkname="story.sublinkname"
						v-bind:sublinkid="story.sublinkid"
					></app-story>

					<img class="panel_bottom" src="/full_BG_bottom.gif">
				</div>
			</div>
		</main>
	`
}

module.exports = AppMainHome;
