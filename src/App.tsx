import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import SimpleContainer from "./components/container/SimpleContainer";

function App() {
  return (
    <div className="App">
    <SimpleContainer>
       <Card/>
    </SimpleContainer>
    </div>
  );
}

export default App;
