import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer';
import { ThemeProvider } from './Modules/ThemeModule';
import { ThemesMetadata } from './Theme';

function App() {
  return (
    <ThemeProvider themesMetadata={ThemesMetadata}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Footer />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
