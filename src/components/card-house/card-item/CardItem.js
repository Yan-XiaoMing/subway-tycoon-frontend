import React from 'react';
import './style.less';

const CardItem = (props) => {
  let footerStyle, wrapperStyle;
  if (props.content.number >= 5) {
    footerStyle = {background: 'yellow', color: '#4DA124'};
  } else if (props.content.number === 0) {
    wrapperStyle = {display: 'none'};
  } else {
    footerStyle = {background: '#E4E4E4', color: '#707070'};
  }
  return (
    <div className='card-item-wrapper' style={wrapperStyle}>
      <img src={require(`../../../assets/img/${props.content.background}.jpg`)} alt='背景'/>
      <div className='card-item'>
        <div className="card-item-title">
          <svg className="icon subway-logo" aria-hidden="true">
            <use xlinkHref="#iconhangzhouditie"/>
          </svg>
          <span className="card-item-title-item">{props.content.station}</span>
        </div>
      </div>
      <div className='card-item-footer' style={footerStyle}>
        <span className='card-item-footer-num'>{props.content.number}</span>
      </div>
    </div>
  );
};

export default CardItem;
