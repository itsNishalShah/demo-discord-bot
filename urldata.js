
const createShortUrl = async(url, token) => {
    const data = await fetch('http://localhost:3000/api/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            "user": "Nishal Discord Bot",
            "url": url
        })
    })
    const shortUrl = await data.json();
    return shortUrl
}

module.exports = {
    createShortUrl
}