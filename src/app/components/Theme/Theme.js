import React from 'react';
import styles from './Theme.module.css'

const Theme = (props) => {
    return (
        <div className={props.darkMode ? styles.darkMode : styles.lightMode}>{props.children}</div >
    );
};

export default Theme;