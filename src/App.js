import React from 'react';
import './App.scss';

// Analytics
import ReactGA from 'react-ga';
// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Content
import Card from './components/Card';

ReactGA.initialize('UA-55197164-8');

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
