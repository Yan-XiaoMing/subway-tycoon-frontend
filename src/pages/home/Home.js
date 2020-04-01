import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import './style.less';
import IconBtn from '../../components/icon-btn/IconBtn';
import MsgLabel from '../../components/msg-label/MsgLabel';
import {msgLabel, iconBtn} from '../../api/config';
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-msg-label-wrapper">
          {
            msgLabel.map((item, index) => {
              return (
                <div className="home-msg-label" key={index}>
                  <MsgLabel iconSrc={item.iconSrc} count={item.count}/>
                </div>
              );
            })
          }
        </div>
        <div className="home-icon-btn-wrapper">
          {
            iconBtn.map((item, index) => {
              return (
                <div className="home-icon-btn" key={index}>
                  <IconBtn imgSrc={item.imgSrc} imgTitle={item.imgTitle}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;
