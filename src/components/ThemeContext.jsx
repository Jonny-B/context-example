import React from 'react';

export const ThemeContext = React.createContext('light');

export function ThemeProvider(props) {
    return (
        <ThemeContext.Provider value={props.value}>
            {props.children}
        </ThemeContext.Provider>
    );
}
