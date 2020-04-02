import React from 'react';
import {msgLabel} from '../../../api/config';
import MsgLabel from '../../../components/msg-label/MsgLabel';

const TopLabel = () => {
  return (
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
  );
};

export default TopLabel;
