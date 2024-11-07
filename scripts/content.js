let scrollInterval;
let scrollSpeed = 10;

function startScroll() {
    stopScroll();
    scrollInterval = setInterval(() => {
        window.scrollBy(0, 1);
    }, 1000 / scrollSpeed);
}

function stopScroll() {
    clearInterval(scrollInterval);
} 

chrome.runtime.onMessage.addListener((request) => {
    if(request.action === 'start') {
        scrollSpeed = request.speed;
        startScroll();
    } else if (request.action === 'stop') {
        stopScroll();
    } else if (request.action === 'changeSpeed') {
        scrollSpeed = request.speed;
        startScroll();
    }
});