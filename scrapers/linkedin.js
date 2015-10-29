
// you can pass a selector or a function
// Determine what to do depending on the element?
var linkedin = new Scraper({
  name: 'linkedin',
  selectors: {
    name: '.profile-overview .full-name',
    title: '#headline .title',
    currentPosition: '#overview-summary-current ol > li',
    oldPositions: '#overview-summary-past ol li',
    skills: '#skills-item li.endorse-item'
    // background: function() {
    //   return [
    //     {
    //       title: '',
    //       position: '' 
    //     },
    //   ];
    // }
  }
});