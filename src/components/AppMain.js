const AppMain = {
  props: ['content'], 
  template: `
    <main id="content" v-html="content"></main>
  ` 
}

module.exports = AppMain;
