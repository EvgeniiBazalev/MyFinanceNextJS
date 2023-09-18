async function getData() {
    const res = await fetch('https://api.coingate.com/v2/rates/merchant/USD/RUB')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Test2() {
    const data = await getData()

    return <div>{data}</div>
}