// dynamically load the time in UTC
const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    function updateTime() {
        const now = new Date();
         timeElement.textContent = now.toUTCString();
    }
updateTime();
