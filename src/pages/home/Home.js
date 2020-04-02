import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import TopLabel from './TopLabel';
import LeftIcons from './LeftIcons';
import RightIcons from './RightIcons';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <TopLabel/>
        <LeftIcons/>
        <RightIcons/>
      </div>
    );
  }
}

export default Home;
