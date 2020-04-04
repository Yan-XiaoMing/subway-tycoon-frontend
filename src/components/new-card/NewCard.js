import React from 'react';
import './style.less';

const NewCard = (props) => {
  return (
    <div className="new-card-container new-card-container-list">
      <img src={require('../../assets/img/card_bg01.jpg')} className="new-card-bg"/>
      <div className="new-card-svg">
        <img src={require('../../assets/img/new_tag.svg')} alt="new"/>
      </div>
      <div className="new-card-wrapper">
        <div className="new-card-title">
          <svg className="icon subway-logo" aria-hidden="true">
            <use xlinkHref="#iconhangzhouditie"/>
          </svg>
          <span className="new-card-title-item">凤起路</span>
        </div>
      </div>
    </div>
  );

};

export default NewCard;
