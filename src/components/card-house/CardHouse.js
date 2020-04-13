import React, {Component} from 'react';
import CardItem from './card-item/CardItem';
import {cardItemList} from '../../api/config';
import './style.less';

class CardHouse extends Component {
  render() {
    return (
      <div className='card-house-wrapper'>
        {
          cardItemList.map((item, index) => {
            return (<CardItem key={index} content={item}/>);
          })
        }
      </div>
    );
  }
}

export default CardHouse;
