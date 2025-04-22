import React, { Component } from 'react';
import menu from '../../assets/data';
import Item from './Item';

export default class FoodItem extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map((meal) => (
          <Item
            key={meal.id}
            img={meal.img}
            title={meal.title}
            desc={meal.desc.split(' ').slice(0, 42).join(' ') + ' ...'}
            price={meal.price}
            link={meal.link}
          />
        ))}
      </div>
    );
  }
}
