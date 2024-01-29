window.onload = function() {

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
    document.getElementById('find_dp').addEventListener('click', function () {
        get_ai("hi, reply shortly");
    });
}