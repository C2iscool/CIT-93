const url = 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz'

    const request = new Request(url, {
        headers: {
            'Authorization': 'Bearer of COOL AWESOME VALUE'
        }
    })
    async function getData() {
        try {
            const response = await fetch(request)
            const data = await response.json()
            if (response.status === 200) {
                console.log('Success:', data)
            } else {
                console.log(`Server Error:`, data.error.message)
            }
        } catch(error) {
            console.log('Fetch Error:', error)
        }
    }

    getData()