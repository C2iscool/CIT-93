async function updateDOM(photos) {
    photos.forEach(img => {
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', img.thumbnailUrl);
        document.getElementById('output').appendChild(imgEl);
    });
}

async function getPhotos() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        return await data.json();

    } catch (error) {
        console.log(`Error ${error}`);
    }
}

async function start() {
    const photos = await getPhotos();
    await updateDOM(photos);
}

start();