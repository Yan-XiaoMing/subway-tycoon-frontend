import React, {Component} from 'react';
import CityCard from '../city-card/CityCard';
import {cityCardList} from '../../api/config';
import PropTypes from 'prop-types';
import CityDetail from '../city-detail/CityDetail';
import RankList from '../rank-list/RankList';
import './style.less';

class WhiteContainer extends Component {

  state = {
    refreshScroll: false,
    cityCard:0
  };


  showCityCard = (index) => {
    this.setState({
      cityCard:index
    });
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
        {(this.props.showNum === 1 && this.state.cityCard===0) && (<div className="white-container-city-card">
          {
            cityCardList.map((item, index) => {
              return <CityCard city={item} key={'0' + index} showCityCard={this.showCityCard} index={index}/>;
            })
          }
        </div>)
        }
        {this.props.showNum===2&&(<RankList/>)}
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
