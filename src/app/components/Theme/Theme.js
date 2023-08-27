import React from 'react';
import styles from './Theme.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeProvider';

const Theme = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={isDarkMode ? styles.darkMode : styles.lightMode}>{children}</div >
    );
};

export default Theme;