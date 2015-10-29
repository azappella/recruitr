var Scraper = (function($) {

  function Scraper(options) {
    this.name = options.name;
    this.selectors = options.selectors;
    this.model = {};
  }

  Scraper.prototype.scrape = function() {
    var self = this;

    for (prop in this.selectors) {
      var len = $(this.selectors[prop]).length;
      if (len > 1) {
        // [{name: selector}]
        // console.log(typeof this.selectors[prop]);
        this.model[prop] = [];
        $(this.selectors[prop]).each(function(i, el){
          self.model[prop].push(el.textContent.replace(', ', ''));
        });
      }
      else {
        this.model[prop] = $(this.selectors[prop]).text();
      }
    }
    console.log(this.model);
  };

  Scraper.prototype.toString = function() {
    return this.name;
  };

  return Scraper;

})(jQuery);