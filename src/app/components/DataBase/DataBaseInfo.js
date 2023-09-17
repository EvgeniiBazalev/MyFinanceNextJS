import axios from 'axios';

// URL вашей базы данных Firebase Realtime Database
const firebaseDatabaseURL = 'https://myfinancenextjs-default-rtdb.europe-west1.firebasedatabase.app/';
const dataPath = 'collectionOne';

const newData = {
    key1: 'new_value1',
    key2: 'new_value2',
};

// Функция для отправки данных
export const postData = async function updateOrCreateData(newData) {
    try {
        // Выполняем GET-запрос для проверки существующих данных
        const response = await axios.get(`${firebaseDatabaseURL}/${dataPath}.json`);

        if (response.data) {
            // Если данные существуют, выполняем PUT-запрос для обновления
            await axios.put(`${firebaseDatabaseURL}/${dataPath}.json`, newData);
        } else {
            // Если данных нет, выполняем POST-запрос для создания новой записи
            await axios.post(`${firebaseDatabaseURL}/${dataPath}.json`, newData);
        }

        console.log('Данные успешно обновлены или созданы в базе данных Firebase');
    } catch (error) {
        console.error('Ошибка при работе с данными в базе данных Firebase:', error);
    }
}

export const getData = async function readDataFromFirebase() {
    try {
        // Выполняем GET-запрос для получения данных
        const response = await axios.get(`${firebaseDatabaseURL}/${dataPath}.json`);

        if (response.data) {
            // Если данные существуют, выводим их в консоль
            console.log('Данные из Firebase Realtime Database:', response.data);
            return response.data;
        } else {
            console.log('Данные по указанному пути отсутствуют.');
            return [];
        }
    } catch (error) {
        console.error('Ошибка при чтении данных из базы данных Firebase:', error);
    }
}






