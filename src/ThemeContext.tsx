import React from 'react';
import {useState, useEffect} from 'react'

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const theme = window.localStorage.getItem('color-theme');
        if (typeof theme === 'string') {
            return theme;
        }
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
   return 'light'
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const handleSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('color-theme', theme);
    };
    if (initialTheme) {
        handleSetTheme(initialTheme);
    }
    useEffect(() => {
        handleSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};