

window.onload = function() {
  // Your code to run after the webpage has fully loaded
  console.log(keywords);
  var pageText = document.body.innerText.toLowerCase();

  // Check if each keyword is present in the page text
  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i].toLowerCase();

    if (pageText.includes(keyword)) {
      console.log('Keyword found:', keyword);
    }

}};

