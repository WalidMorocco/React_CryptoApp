import './App.css';
import { Layout } from './components/Layout';
import {ThemeContext, themes} from './context/themeContext';
import React, {useState} from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import Navbar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState(themes);

  const toggleTheme = () => {
    setTheme((previousThemeValue) => 
      previousThemeValue === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme }}>  
      <div>

        <div className='toggle'>
          <div>
            <p className='colorText'>Light/Dark</p>
            <ToggleSwitch onToggle={toggleTheme}/>
          </div>                 
        </div>

        <div className='navbar'>
          <Navbar/>
        </div>
        
        <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground }}>
          <Layout />
        </div>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
