import React, {Component} from 'react';
import CityCard from '../city-card/CityCard';
import {cityCardList} from '../../api/config';
import PropTypes from 'prop-types';
import './style.less';

class WhiteContainer extends Component {

  state = {
    refreshScroll: false
  };

  render() {
    return (
      <div className="white-container">
        {(this.props.showNum === 2 || this.props.showNum === 4) && (<div className="white-container-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#iconjiangbei"/>
          </svg>
        </div>)}
        {this.props.showNum === 1 && (<div className="white-container-city-card">
          {
            cityCardList.map((item, index) => {
              return <CityCard city={item} key={'0' + index}/>;
            })
          }
        </div>)

        }

      </div>
    );
  }
}

WhiteContainer.propTypes = {
  showNum: PropTypes.number
};
WhiteContainer.defaultProps = {
  showNum: 0
};

export default WhiteContainer;
