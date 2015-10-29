// // Called when the user clicks on the browser action icon.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // We can only inject scripts to find the title on pages loaded with http
//   // and https so for all other pages, we don't ask for the title.
//   if (tab.url.indexOf("http:") != 0 &&
//       tab.url.indexOf("https:") != 0) {
//     // executeMailto(tab.id, "", tab.url, "");
//     // do something useful
//   } else {
//     chrome.tabs.executeScript(null, {file: "init.js"});
//   }
// });

chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
  chrome.tabs.executeScript(null, {file: "js/jquery-2.1.4.min.js"});
  chrome.tabs.executeScript(null, {file: "Scraper.js"});
  chrome.tabs.executeScript(null, {file: "scrapers/linkedin.js"});
  chrome.tabs.executeScript(null, {file: "init.js"});
});
