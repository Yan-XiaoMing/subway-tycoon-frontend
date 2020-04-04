import {rightIconsBtn} from '../../../api/config';
import IconBtn from '../../../components/icon-btn/IconBtn';
import React from 'react';

const RightIcons = (props) => {
  return (
    <div className="home-right-icon-btn-wrapper">
      {
        rightIconsBtn.map((item, index) => {
          return (
            <div className="home-right-icon-btn" key={index}>
              <IconBtn svgHref={item.svgHref} imgSrc={item.imgSrc} imgTitle={item.imgTitle}
                       onClick={() => props.showCard(index)}/>
            </div>
          );
        })
      }
    </div>
  );
};
export default RightIcons;
