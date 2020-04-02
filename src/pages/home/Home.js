import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import TopLabel from './components/TopLabel';
import LeftIcons from './components/LeftIcons';
import RightIcons from './components/RightIcons';
import HomeTablet from './components/home-tablet/HomeTablet';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <TopLabel/>
        <LeftIcons/>
        <RightIcons/>

        <HomeTablet/>
      </div>
    );
  }
}

export default Home;
