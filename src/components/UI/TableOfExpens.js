import styles from './TableOfExpens.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';


const TableOfExpens = (props) => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <table className={`${styles.tableOfExpenses} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Категория расходов</th>
                    <th>Дата</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                {props.listOfExpenses.map((item) => (

                    <tr key={item.id} className={`${styles.listOfExpenses} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
                        <td className={styles.itemId}>{item.id}</td>
                        <td className={styles.itemExpens}>{item.expens}</td>
                        <td className={styles.itemDate}>{item.date}</td>
                        <td className={styles.itemPrice}>{item.price + ' ' + item.exchange}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
};

export default TableOfExpens;