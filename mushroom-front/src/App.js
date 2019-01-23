import React, { Component } from 'react';
import './App.css';
import NavBar from './Header'
import ProductsContainer from './ProductsContainer'
import SearchForm from './SearchForm'




class App extends Component {
  state = {
    products: [],
    searchTerm: "",
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm />
        <ProductsContainer />
        </div>
    );
  }
}

export default App;
