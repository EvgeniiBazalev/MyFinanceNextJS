'use client'

import styles from './Expens.module.css'
import { useContext, useState, useEffect } from 'react';
import AddExpens from './AddExpens';
import TableOfExpens from './TableOfExpens';
import Theme from '../Theme/Theme';
import CurrentExchange from './CurrentExchange';
// import ExchangeRates from './dataFromAPI/ExchangeRates';
// import Test from './dataFromAPI/Test';
// import Test2 from './dataFromAPI/Test2';
import { ThemeContext } from '../../context/ThemeProvider';
import { useSelector, useDispatch } from 'react-redux'
import { addExpens, newExpens } from '@/app/store/expensSlice';
import { postData, getData } from '../DataBase/DataBaseInfo';

export default function Expens() {
    //theme mode
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);
    const [themeName, setThemeName] = useState('Темная тема');

    const [isButtonDisabled, setButtonDisabled] = useState(false); // Изначально кнопка активна
    const [isPageLoaded, setPageLoaded] = useState(false); //Изачально false до загрузки данных из БД

    const listOfExpenses = useSelector((state) => state.expens);
    const dispatch = useDispatch();


    const onThemeHandler = () => {
        isDarkMode ? setThemeName('Темная тема') : setThemeName('Светлая тема');
        setDarkMode(prevMode => !prevMode);
    }

    //Получение данных из БД
    useEffect(() => {

        const getDataToReduxStore = async () => {
            try {
                setButtonDisabled(true);
                const dataFromDataBase = await getData();
                dispatch(newExpens(dataFromDataBase));
                setPageLoaded(true);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            } finally {
                setTimeout(() => {
                    setButtonDisabled(false);
                }, 100);
            }
        }
        if (!isPageLoaded) {
            getDataToReduxStore();
        }

    }, []);

    //Отправка данных в БД
    useEffect(() => {
        const fetchData = async () => {
            try {
                await postData(listOfExpenses);
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            } finally {
                setTimeout(() => {
                    setButtonDisabled(false);
                }, 100);
            }
        };

        if (isPageLoaded) {
            fetchData();
        }
    }, [listOfExpenses]);


    //list of expens
    const [expens, setExpens] = useState('');
    const [price, setPrice] = useState(0);
    const [userDate, setUserDate] = useState(todayForInputDefault());

    const onExpensHandler = (event) => {
        setExpens(event.target.value);
    }
    const onPriceHandler = (event) => {
        setPrice(event.target.value);
    }
    const onUserDateHandler = (event) => {
        setUserDate(formatDate(event.target.value));
    }

    let onSubmitHandler = (event) => {
        setButtonDisabled(true);
        event.preventDefault();
        dispatch(addExpens(
            {
                id: listOfExpenses.length + 1,
                expens,
                price,
                exchange: 'руб',
                date: userDate === todayForInputDefault() ? formatDate(userDate) : userDate,
            }
        ))
    }

    return (
        <Theme>
            <div className={styles.App}>
                <div className={`${styles.headOfForm} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
                    <h1 className={styles.headOfFormText}>Мои финансы</h1>
                    <button className={`${styles.themeButton} + ${isDarkMode ? styles.darkMode : styles.lightMode}`} onClick={onThemeHandler}>{themeName}</button>
                </div>

                {/* <CurrentExchange></CurrentExchange> */}

                <AddExpens
                    onExpensHandler={onExpensHandler}
                    onPriceHandler={onPriceHandler}
                    onUserDateHandler={onUserDateHandler}
                    onSubmitHandler={onSubmitHandler}
                    todayForInputDefault={todayForInputDefault}
                    isButtonDisabled={isButtonDisabled}
                >

                </AddExpens>

                <TableOfExpens listOfExpenses={listOfExpenses} />
            </div >
        </Theme>
    );
}


function todayForInputDefault() { //Дата в формате YYYY-MM-DD для input defaultValue
    let currentToday = new Date();
    let currentDate = currentToday.getDate() > 10 ? currentToday.getDate() : '0' + currentToday.getDate();
    let currentMonth = (currentToday.getMonth() + 1) > 10 ? (currentToday.getMonth() + 1) : '0' + (currentToday.getMonth() + 1);
    let currentYear = currentToday.getFullYear();

    return (currentYear + '-' + currentMonth + '-' + currentDate);
}

function formatDate(date) { //Преобразование даты из формата YYYY-MM-DD в дату в формате DD.MM.YYYY
    const parts = date.split('-'); // Разделение компонентов даты
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day}.${month}.${year}`;
};