const links = {
	props: ['sublinkid', 'sublinkname', 'thisSublinkId'],
	template: `
		<p
			v-if="sublinkid == thisSublinkId" class="live"
			v-html="sublinkname"
		>
		</p>
		<p v-else>
			<a
				v-bind:href="'/?linkId=3&sublinkId=' + sublinkid"
				v-html="sublinkname"
			>
			</a>
		</p>
	`
};

const AppMainPanels = {
	props: ['storyData', 'thisSublinkId'],
	components: {
		'app-links': links
	},
	data(storyData) {
		return {
			story: this.storyData.shift(), 
			links: this.storyData
		}
	}, 
	template: `
		<main id="content">
			<div id="col_left">
				<div class="panel_left">
					<p v-html="story.content"></p>
					<img class="panel_bottom" src="/content_BG_bottom.gif"/>
				</div>
			</div>

			<div id="col_right">
				<div class="panel_right">
					<app-links
						v-for="link in links"
						v-bind:sublinkid="link.sublinkid"
						v-bind:sublinkname="link.content"
						v-bind:thisSublinkId="thisSublinkId"
					></app-links>
					<img class="panel_bottom" src="/panel_BG_bottom.gif"/>
				</div>
			</div>
		</main>
	`
}

module.exports = AppMainPanels;
