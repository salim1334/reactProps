import React, { Component } from 'react';
import Header from './components/Header/Header';
import FoodItem from './components/FoodItem/FoodItem';

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodItem />
      </div>
    );
  }
}
