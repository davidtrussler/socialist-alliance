const AppNav = {
  props: ['linkId'], 
  template: `
    <nav id="links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/?linkid=3">CNWP</a></li>
        <li><a href="/?linkid=2">Left Unity</a></li>
        <li><a href="/?linkid=4">Reports</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  ` 
}

module.exports = AppNav;
