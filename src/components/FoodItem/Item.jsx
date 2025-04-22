import { Component } from 'react';

const style = {
  textAlign: 'right',
  color: 'blue',
  margin: '5px 10px 0 0',
};

export default class Item extends Component {
  render() {
    const { img, title, price, desc, link } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className="food-desc">
          {desc}
          {link && <p style={style}>{link}</p>}
        </div>
      </div>
    );
  }
}
