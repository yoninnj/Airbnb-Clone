import React, { useState } from 'react';
import Header from './Header'
import Nav from './Nav'
import './App.css';
import Footer from './Footer'
import Results from './Results';
import requests from './requests';

function App() {
  const [selectedOption,setSelectedOption]=useState(requests.fetchTopRated)
  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
      <Footer />


    </div>
  );
}

export default App;
