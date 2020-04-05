import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import TopLabel from './components/TopLabel';
import LeftIcons from './components/LeftIcons';
import RightIcons from './components/RightIcons';
import HomeTablet from './components/home-tablet/HomeTablet';
import NewCard from '../../components/new-card/NewCard';
import {newCardList} from '../../api/config';

class Home extends Component {
  state = {
    cardVisible: 0
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
  };


  render() {
    return (
      <div className="home-container" onClick={this.hideCard}>
        <TopLabel/>
        <LeftIcons/>
        <RightIcons showCard={this.showCard}/>
        <HomeTablet showCard={this.showCard}/>
        {this.state.cardVisible === 1 && (<NewCard newCardList={newCardList}/>)}
      </div>
    );
  }
}

export default Home;
