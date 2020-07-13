import React, {Component} from 'react';
import BScroll from '@better-scroll/core'
import CityCard from '../city-card/CityCard';
import {cityCardList} from '../../api/config';
import PropTypes from 'prop-types';
import CityDetail from '../city-detail/CityDetail';
import RankList from '../rank-list/RankList';
import TaskHouse from '../task-house/TaskHouse';
import CardHouse from '../card-house/CardHouse';
import './style.less';

class WhiteContainer extends Component {

  state = {
    refreshScroll: false,
    cityCard: 0,
    rankListType: 0,
    bs: ''
  };


  changeRankListType = () => {
    if (this.state.rankListType) {
      this.setState({
        rankListType: 0
      });
    } else {
      this.setState({
        rankListType: 1
      });
    }
  };

  showCityCard = (index) => {
    this.setState({
      cityCard: index
    });
  };

  componentDidMount() {
    if (this.props.showNum === 1) {
      console.log('初始化')
      const wccc = document.querySelector('.white-container-city-card');
      console.log(wccc);
      const bs = new BScroll(wccc)
      this.setState({bs: bs})
    }
  }

  componentWillUnmount() {
    if (this.props.showNum === 2) {
      this.setState({
        rankListType: 0
      });
    }
  }

  render() {
    var icon;
    if (this.props.showNum === 2) {
      icon = '#iconjiangbei';
    } else {
      icon = '#iconshoucang';
    }
    return (
      <div className="white-container">
        {(this.props.showNum === 2 || this.props.showNum === 4) && (
          <div className="white-container-icon" onClick={this.changeRankListType}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={icon}/>
            </svg>
          </div>)}
        {(this.props.showNum === 1 && this.state.cityCard === 0) && (<div className="white-container-city-card">
          <ul className='wrapper-city-card' style={{margin:'.3rem auto'}}>
            {
              cityCardList.map((item, index) => {
                return <CityCard isImgLoad={this.isImgLoad} city={item} key={'0' + index}
                                 showCityCard={this.showCityCard}
                                 index={index}/>;
              })
            }
          </ul>
        </div>)}
        {this.props.showNum === 2 && (<RankList type={this.state.rankListType} changeType={this.changeRankListType}/>)}
        {this.props.showNum === 3 && (<TaskHouse/>)}
        {this.props.showNum === 4 && (<CardHouse/>)}
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
