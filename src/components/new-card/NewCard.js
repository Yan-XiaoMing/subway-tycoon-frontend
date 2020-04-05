import React from 'react';
import PropTypes from 'prop-types';
import './style.less';
import {newCardList} from '../../api/config';

const NewCard = (props) => {
  const main = newCardList.main;
  return (
    <div className="new-card-container new-card-container-list">
      <img src={require(`../../assets/img/${newCardList.background}.jpg`)} className="new-card-bg" alt="背景"/>
      <div className="new-card-svg">
        <img src={require('../../assets/img/new_tag.svg')} alt="new"/>
      </div>
      <div className="new-card-wrapper">
        <div className="new-card-title">
          <svg className="icon subway-logo" aria-hidden="true">
            <use xlinkHref="#iconhangzhouditie"/>
          </svg>
          <span className="new-card-title-item">{newCardList.station}</span>
        </div>
        <div className="new-card-main-wrapper">
          {
            main.map((item, index) => {
              return (
                <div className="new-card-main" key={index}>
                  <div className="new-card-main-title">
                    <span className="new-card-main-title-item">{item.title}:</span>
                  </div>
                  <div className="new-card-main-text">
                    {
                      item.children.map((item, index) => {
                        return (
                          <span className="new-card-main-text-item" key={index + item.list}>{item.list}</span>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }


        </div>
      </div>
    </div>
  );

};
NewCard.propTypes = {
  newCardList: PropTypes.object
};

export default NewCard;
