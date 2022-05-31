import React, {useContext} from 'react';
import {ThemeContext, themes} from '../context/themeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {  

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="app-container">
        <header className="nav" >
            <nav className="nav" style={{background: theme.background, color:theme.foreground}}>
                <Link to="/">Home</Link>
                <Link to="coins">Coins</Link>
            </nav>
        </header>
    </div>
  )
};

export default Navbar;