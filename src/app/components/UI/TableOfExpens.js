import styles from './TableOfExpens.module.css'

const TableOfExpens = (props) => {
    return (
        <table className={`${styles.tableOfExpenses} + ${props.darkMode ? styles.darkMode : styles.lightMode}`}>
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

                    <tr key={item.id} className={`${styles.listOfExpenses} + ${props.darkMode ? styles.darkMode : styles.lightMode}`}>
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