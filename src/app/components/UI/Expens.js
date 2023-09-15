'use client'

import styles from './Expens.module.css'

import { useContext, useState } from 'react';

import AddExpens from './AddExpens';
import TableOfExpens from './TableOfExpens';
import Theme from '../Theme/Theme';
import { ThemeContext } from '../../context/ThemeProvider';
import { useSelector, useDispatch } from 'react-redux'
import { addExpens } from '@/app/store/expensSlice';

function TodayForInputDefault() { //Дата в формате YYYY-MM-DD для input defaultValue
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

export default function Expens() {
    //theme mode
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);
    const [themeName, setThemeName] = useState('Темная тема');

    const listOfExpenses = useSelector((state) => state.expens);
    const dispatch = useDispatch();


    const onThemeHandler = () => {
        isDarkMode ? setThemeName('Темная тема') : setThemeName('Светлая тема');
        setDarkMode(prevMode => !prevMode);
    }


    //list of expens
    const [expens, setExpens] = useState('');
    const [price, setPrice] = useState(0);
    const [userDate, setUserDate] = useState(TodayForInputDefault());

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
        event.preventDefault();

        dispatch(addExpens(
            {
                id: listOfExpenses.length + 1,
                expens,
                price,
                exchange: 'руб',
                date: userDate === TodayForInputDefault() ? formatDate(userDate) : userDate,
            }
        ))

    }

    return (

        <Theme>
            <div className={styles.App}>

                <button className={`${styles.themeButton} + ${isDarkMode ? styles.darkMode : styles.lightMode}`} onClick={onThemeHandler}>{themeName}</button>

                <p>Список расходов</p>

                <AddExpens

                    onExpensHandler={onExpensHandler}
                    onPriceHandler={onPriceHandler}
                    onUserDateHandler={onUserDateHandler}
                    onSubmitHandler={onSubmitHandler}
                    TodayForInputDefault={TodayForInputDefault}
                />

                <TableOfExpens listOfExpenses={listOfExpenses} />
            </div >

        </Theme>
    );
}
