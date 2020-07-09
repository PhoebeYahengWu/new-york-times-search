import React, { Component } from 'react';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import API from './utils/API';
import './App.css';

class App extends Component() {
  state = {
    search: "",
    result: {}
  };

  componentDidMount() {
    this.searchNews("Stock Market")
  }

  searchNews = query => {
    API.search(query)
      .then(res => console.log(res))
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container h-100">
      <Title />   
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-10">
        <Search />
        <Result />
        </form>
      </div>
      </div>
    )
  }
}

export default App;
