document.getElementById('start').addEventListener('click', () => {
    const speed = document.getElementById('speedSlider').value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'start', speed: speed});
    });
});

document.getElementById('stop').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'stop'});
    });
});

document.getElementById('speedSlider').addEventListener('input', () => {
    const speed = event.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'changeSpeed', speed: speed});
    });
});