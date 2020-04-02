import {leftIconsBtn} from '../../api/config';
import IconBtn from '../../components/icon-btn/IconBtn';
import React from 'react';

const LeftIcons = () => {
  return (
    <div className="home-left-icon-btn-wrapper">
      {
        leftIconsBtn.map((item, index) => {
          return (
            <div className="home-icon-btn" key={index}>
              <IconBtn imgSrc={item.imgSrc} imgTitle={item.imgTitle}/>
            </div>
          );
        })
      }
    </div>
  );
};
export default LeftIcons;
