const content = require('fs').readFileSync('./src/content/Home.html', 'utf-8'); 

const AppMain = {
  template: `
    <main id="content">
      ${content}
    </main>
  ` 
}

module.exports = AppMain;
