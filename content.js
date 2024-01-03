// content.js

// Function to check for updates
async function checkForUpdates() {
  // Fetch the update information from the server
  const response = await fetch('https://sriharan.site/digipro/update.json');
  const updateInfo = await response.json();

  // Compare the version from updateInfo with the current extension version
  const currentVersion = chrome.runtime.getManifest().version;

  if (updateInfo.version > currentVersion) {
    // Update is available, trigger a reload
    chrome.runtime.reload();
  }
}

// Run the update check on extension startup
checkForUpdates();

document.addEventListener('keydown', async function (event) {
    const departmentElement = document.getElementById('headcontent_sdeptdiv');
    if (!departmentElement || !/AIML/i.test(departmentElement.textContent)) {
        alert('Not available for your department.');
        return;
    } else {
        console.log(departmentElement);
    }

    if (event.altKey && event.key === 'v') {
        const pastedContent = await navigator.clipboard.readText();
        const focusedElement = document.activeElement;
        focusedElement.value = pastedContent + "\n";
        focusedElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    } else if (event.altKey && event.key === 'h') {
        editor.execCommand('replace');
    } else if (event.altKey && event.key === 'x') {
        editor.replaceAll("", { needle: /\/\/.*/, regExp: true });
    } else if (event.altKey && event.key === 'p') {
        alert('Malpractice Identified');
    }
});