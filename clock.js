function updateTime() {
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const { style } = document.documentElement;
    style.setProperty('--timer-day', daysOfWeek[day]);
    style.setProperty('--timer-hours', String(hours).padStart(2, '0'));
    style.setProperty('--timer-minutes', String(minutes).padStart(2, '0'));
    style.setProperty('--timer-seconds', String(seconds).padStart(2, '0'));

    document.querySelector('.day').textContent = daysOfWeek[day];
    document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
    document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
    document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
}

// Call updateTime initially to set the initial values
updateTime();

// Set up an interval to call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);


            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("current_date").innerHTML = new Date().toLocaleDateString('en-US', options);
    