'use client'

import styles from './Page.module.css';
import { useState } from 'react';
import AddExpens from './components/UI/AddExpens';
import TableOfExpens from './components/UI/TableOfExpens';
import Theme from './components/Theme/Theme';

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

export default function Home() {
  //theme mode

  const [darkMode, setDarkMode] = useState(false);
  const [themeName, setThemeName] = useState('Темная тема');

  const onThemeHandler = () => {
    darkMode ? setThemeName('Темная тема') : setThemeName('Светлая тема');
    setDarkMode(prevMode => !prevMode);
  }


  //list of expens
  const [expens, setExpens] = useState('');
  const [price, setPrice] = useState(0);
  const [userDate, setUserDate] = useState(TodayForInputDefault());
  const [listOfExpenses, setListOfExpenses] = useState([
    { id: 1, expens: 'Продукты', price: 2000, exchange: 'руб', date: '01.01.2021' },
    { id: 2, expens: 'Курица', price: 5000, exchange: 'руб', date: '05.01.2021' },
    { id: 3, expens: 'Вазелин', price: 500, exchange: 'руб', date: '01.02.2022' },
    { id: 4, expens: 'Лекарства', price: 1500, exchange: 'руб', date: '12.02.2022' },
    { id: 5, expens: 'Парикмахер', price: 1000, exchange: 'руб', date: '01.03.2023' },
    { id: 6, expens: 'Маникюр', price: 6000, exchange: 'руб', date: '12.03.2023' },
  ]);

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
    setListOfExpenses([...listOfExpenses,
    {
      id: listOfExpenses.length + 1,
      expens: expens,
      price: price,
      exchange: 'руб',
      date: userDate === TodayForInputDefault() ? formatDate(userDate) : userDate,
    }
    ]);
  }

  return (

    <Theme darkMode={darkMode}>
      <div className={styles.App}>

        <button className={`${styles.themeButton} + ${darkMode ? styles.darkMode : styles.lightMode}`} onClick={onThemeHandler}>{themeName}</button>

        <p>Список расходов</p>

        <AddExpens
          darkMode={darkMode}

          onExpensHandler={onExpensHandler}
          onPriceHandler={onPriceHandler}
          onUserDateHandler={onUserDateHandler}
          onSubmitHandler={onSubmitHandler}
          TodayForInputDefault={TodayForInputDefault}
        />

        <TableOfExpens darkMode={darkMode} listOfExpenses={listOfExpenses} />
      </div >

    </Theme>
  );
}
