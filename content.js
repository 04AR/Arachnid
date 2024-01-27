// Replace 'your-element-id' with the specific ID you want to extract
const elementId = 'productTitle';

function extractElementId() {
  const element = document.getElementById(elementId);
  if (element) {
    const extractedValue = element.innerText || element.textContent;
    chrome.runtime.sendMessage({ type: 'setElementId', value: extractedValue });
  }
}

// Run the function when the page is fully loaded
window.onload = extractElementId;
