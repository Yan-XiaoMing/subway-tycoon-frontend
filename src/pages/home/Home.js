import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import TopLabel from './components/TopLabel';
import LeftIcons from './components/LeftIcons';
import RightIcons from './components/RightIcons';
import HomeTablet from './components/home-tablet/HomeTablet';
import NewCard from '../../components/new-card/NewCard';

class Home extends Component {
  state = {
    cardVisible: 0
  };

  showCard = (cardId) => {

  };

  render() {
    return (
      <div className="home-container">
        <TopLabel/>
        <LeftIcons/>
        <RightIcons showCard={this.showCard}/>
        <HomeTablet/>
        <NewCard/>
      </div>
    );
  }
}

export default Home;
