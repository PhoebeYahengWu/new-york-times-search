import React from 'react';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import './App.css';

function App() {
  return (
    <>
    <div className="container h-100">
    <Title />   
    <div className="row h-100 justify-content-center align-items-center">
      <form className="col-10">
      <Search />
      <Result />
      </form>
    </div>
    </div>
    </>
  );
}

export default App;
