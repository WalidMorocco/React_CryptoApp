import React from 'react';

export const themes = {
    
    light: {
        foreground: '#222222',
        background: '#fff'
    },

    dark: {
        foreground: '#fff',
        background: '#222222'
    },
    
};

export const ThemeContext = React.createContext({
    theme:{},
});

