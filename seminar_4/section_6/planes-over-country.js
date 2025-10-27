import fetch from "node-fetch"

async function getObjectFromUrl(url) {
    const response = await fetch(url)
    const text = await response.text()
    return JSON.parse(text)
}

async function getCountryBounds(country) {
    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return {
        minLatitude: parseFloat(object[0].boundingbox[0]),
        maxLatitude: parseFloat(object[0].boundingbox[1]),
        minLongitude: parseFloat(object[0].boundingbox[2]),
        maxLongitude: parseFloat(object[0].boundingbox[3])
    }
}

async function getPlanesOverCountry(country) {
    const bounds = await getCountryBounds(country)
    const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`
    const data = await getObjectFromUrl(url)
    if (!data.states) {
        console.log(`Nu s-au gasit avioane deasupra ${country}`)
        return []
    }
    return data.states.map(state => ({
        icao24: state[0],
        callsign: state[1]?.trim(),
        origin_country: state[2],
        longitude: state[5],
        latitude: state[6],
        altitude: state[7],
        velocity: state[9]
    }))
}

getPlanesOverCountry('Romania')
    .then(planes => {
        console.log(`\nAvioane deasupra Romaniei (${planes.length} detectate):`)
        planes.forEach(p => {
            console.log(`${p.callsign || '(fara indicativ)'} — ${p.origin_country} — ${p.latitude}, ${p.longitude}`)
        })
    })
    .catch(err => console.error('Eroare:', err))
