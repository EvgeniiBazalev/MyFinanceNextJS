import axios from 'axios';

// URL вашей базы данных Firebase Realtime Database
const firebaseDatabaseURL = 'https://myfinancenextjs-default-rtdb.europe-west1.firebasedatabase.app/';

// Функция для отправки данных
let postData = async function sendDataToFirebase() {
    try {
        // Данные, которые вы хотите отправить
        const newData = {
            key1: 'value1',
            key2: 'value2',
        };

        // Отправляем POST-запрос для добавления данных в Firebase
        const response = await axios.post(`${firebaseDatabaseURL}/your_collection_name.json`, newData);

        console.log('Данные успешно отправлены в базу данных Firebase:', response.data);
    } catch (error) {
        console.error('Ошибка при отправке данных в базу данных Firebase:', error);
    }
}

export default postData;

