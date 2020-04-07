import React, {Component} from 'react';
import CityCard from '../city-card/CityCard';
import {cityCardList} from '../../api/config';
import PropTypes from 'prop-types';
import CityDetail from '../city-detail/CityDetail';
import './style.less';

class WhiteContainer extends Component {

  state = {
    refreshScroll: false
  };

  render() {
    var icon;
    if (this.props.showNum === 2) {
      icon = '#iconjiangbei';
    } else {
      icon = '#iconshoucang';
    }
    return (
      <div className="white-container">
        {(this.props.showNum === 2 || this.props.showNum === 4) && (<div className="white-container-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={icon}/>
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
        {/*<CityDetail/>*/}
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
