import React from 'react';
import './style.less';

const CityCard = (props) => {
  return (
    <div className='city-card-wrapper' onClick={() => props.showCityCard(1)}>
      {/*<div className='test-full'></div>*/}
      <img src={require(`../../assets/img/${props.city.background}.jpg`)} alt="城市卡片"/>
      <div className='city-card-title'>
        <span className='city-card-title-item'>{props.city.city}地铁</span>
      </div>
      <div className='city-card-btn' >
        <span className="city-card-btn-item">项目详情</span>
      </div>
    </div>
  );

};



export default CityCard;
