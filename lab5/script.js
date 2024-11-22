async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


fetchData('https://jsonplaceholder.typicode.com/posts/1');


function delayedLog(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time);
    });
}

delayedLog('Wiadomość po 2 sekundach', 2000);


async function parallelRequests(urls) {
    try {
        const requests = urls.map(url => fetch(url).then(response => response.json()));
        const results = await Promise.all(requests);
        console.log(results);
    } catch (error) {
        console.error('Error in parallel requests:', error);
    }
}

parallelRequests([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
]);


async function sequentialRequests(urls) {
    try {
        for (const url of urls) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error('Error in sequential requests:', error);
    }
}

sequentialRequests([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
]);


async function retryFetch(url, retries) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            return; 
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed:`, error);
            if (attempt === retries) {
                console.error('Max retries reached');
            }
        }
    }
}

retryFetch('https://jsonplaceholder.typicode.com/posts/1', 3);
