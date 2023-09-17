export default async function handler(req, res) {
    try {
        const response = await fetch('https://api.coingate.com/v2/rates/merchant/EUR/RUB');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}