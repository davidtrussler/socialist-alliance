const AppNav = {
  props: ['linkId', 'url'], 
  template: `
    <nav id="links">
      <ul>
        <li v-if="url == '/'" class="live">Home</li>
        <li v-else><a href="/">Home</a></li>

        <li v-if="linkId == '3'" class="live">CNWP</li>
        <li v-else><a href="/?linkId=3">CNWP</a></li>

        <li v-if="linkId == '2'" class="live">Left Unity</li>
        <li v-else><a href="/?linkId=2">Left Unity</a></li>

        <li v-if="linkId == '4'" class="live">Reports</li>
        <li v-else><a href="/?linkId=4">Reports</a></li>

        <li v-if="url == '/events'" class="live">Events</li>
        <li v-else><a href="/events">Events</a></li>

        <li v-if="url == '/about'" class="live">About Us</li>
        <li v-else><a href="/about">About Us</a></li>

        <li v-if="url == '/contact'" class="live">Contact Us</li>
        <li v-else><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  ` 
}

module.exports = AppNav;
