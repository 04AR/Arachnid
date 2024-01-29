window.onload = function () {

  var pageText = document.body.innerText.toLowerCase();

  console.log(pageText)

  function get_ai(des) {   
    var api_result = ''
  
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apikey;
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const data = {
      contents: [
        {
          parts: [
            {
              text: des,
            },
          ],
        },
      ],
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.candidates[0]?.content?.parts[0]?.text);
        api_result = result.candidates[0]?.content?.parts[0]?.text;
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
  }


  //   // Check if each keyword is present in the page text
  //   for (var i = 0; i < keywords.length; i++) {
  //     var keyword = keywords[i].toLowerCase();

  //     if (pageText.includes(keyword)) {
  //       console.log('Keyword found:', keyword);
  //     }
  // }
};

