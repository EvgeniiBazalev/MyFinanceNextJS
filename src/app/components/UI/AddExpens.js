import React from 'react';
import styles from './AddExpens.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeProvider';


const AddExpens = (props) => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.expensForm} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <form onSubmit={props.onSubmitHandler}>
                <label>Категория расходов
                    <input
                        name='expens'
                        className={styles.expens}
                        placeholder="На что потратились"
                        type='text'
                        onChange={props.onExpensHandler}
                    >
                    </input>
                </label>

                <label>Цена
                    <input
                        name='price'
                        className={styles.price}
                        placeholder="Стоимость покупки или платежа"
                        onChange={props.onPriceHandler}
                    >
                    </input>
                </label>

                <label>Дата покупки (расхода)
                    <input
                        className={styles.date}
                        type="date"
                        defaultValue={props.TodayForInputDefault()}
                        onChange={props.onUserDateHandler}
                    >
                    </input>
                </label>

                <input className={styles.submit} type="submit" value="Внести расход"></input>
            </form>
        </div>
    );
};

export default AddExpens;
