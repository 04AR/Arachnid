// popup.js
document.getElementById('detectButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'detectDarkPatterns' }, function(response) {
      if (chrome.runtime.lastError) {
        // Handle errors
        document.getElementById('result').innerText = 'Error detecting dark patterns.';
      } else if (response && response.result) {
        document.getElementById('result').innerText = response.result ? 'Dark pattern detected!' : 'No dark patterns found.';
      } else {
        document.getElementById('result').innerText = 'No response from content script.';
      }
    });
  });
});
