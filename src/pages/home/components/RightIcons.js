import {rightIconsBtn} from '../../../api/config';
import IconBtn from '../../../components/icon-btn/IconBtn';
import React from 'react';

const RightIcons = () => {
  return (
    <div className="home-right-icon-btn-wrapper">
      {
        rightIconsBtn.map((item, index) => {
          return (
            <div className="home-right-icon-btn" key={index}>
              <IconBtn svgHref={item.svgHref} imgSrc={item.imgSrc} imgTitle={item.imgTitle}/>
            </div>
          );
        })
      }
    </div>
  );
};
export default RightIcons;
