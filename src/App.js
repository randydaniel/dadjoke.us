import React from 'react';
import './App.scss';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Content
import Card from './components/Card';

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
