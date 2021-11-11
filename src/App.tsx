import React from 'react';
import './App.css';
import Autocorrecttextarea from './components/AutocorrectTextarea';
import InfiniteScrollingPage from './components/InfiniteScrollingPage';

function App() {
  return (
    <>
    <h3>1. Auto correct application </h3>
    <Autocorrecttextarea/>
    <hr className="solid"></hr>
    <h3>2. Infinite scroll application</h3>
    <InfiniteScrollingPage />
    </>    
  );
}

export default App;
