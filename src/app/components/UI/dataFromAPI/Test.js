import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExchangeRatesComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/exchangeRatesAPI'); // Запрос к API-маршруту
                setData(response.data); // Обработка полученных данных
            } catch (error) {
                console.error('Ошибка при запросе к API:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Результаты запроса к API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}