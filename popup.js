chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'setElementId') {
    document.getElementById('elementId').innerText = request.value;
  }
});