import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import TopLabel from './components/TopLabel';
import LeftIcons from './components/LeftIcons';
import RightIcons from './components/RightIcons';
import HomeTablet from './components/home-tablet/HomeTablet';
import NewCard from '../../components/new-card/NewCard';
import {newCardList} from '../../api/config';
import WhiteContainer from '../../components/white-container/WhiteContainer';
import './animation.less';

class Home extends Component {
  state = {
    cardVisible: 0,
    whiteContainer: 0,
    isView: false
  };

  showContainer = (iconId) => {
    this.setState({
      whiteContainer: iconId
    });
  };

  showCard = (cardId) => {
    this.setState({
      cardVisible: cardId
    });
  };
  hideCard = () => {
    if (this.state.cardVisible) {
      this.setState({
        cardVisible: 0
      });
    }
    if (this.state.whiteContainer) {
      this.setState({
        whiteContainer: 0
      });
    }
  };

  render() {
    const state = this.state;
    return (
      <div className="home-wrapper">
        <div className="home-container" onClick={this.hideCard}>
          <TopLabel/>
          <LeftIcons/>
          <RightIcons showContainer={this.showContainer}/>
          <HomeTablet showCard={this.showCard}/>

          <div className='home-bg-container'>
            <div className='home-bg'>
              <img src={require('../../assets/img/HomeCity.png')} alt="bg"/>
            </div>
          </div>

        </div>
        {state.cardVisible === 1 && state.whiteContainer === 0 && (<NewCard newCardList={newCardList}/>)}
        {state.whiteContainer > 0 && <WhiteContainer showNum={state.whiteContainer}/>}
      </div>
    );
  }
}

export default Home;
