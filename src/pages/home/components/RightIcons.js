import {rightIconsBtn} from '../../../api/config';
import IconBtn from '../../../components/icon-btn/IconBtn';
import React from 'react';
import PropTypes from 'prop-types';

const RightIcons = (props) => {
  return (
    <div className="home-right-icon-btn-wrapper">
      {
        rightIconsBtn.map((item, index) => {
          return (
            <div className="home-right-icon-btn" key={index}>
              <IconBtn svgHref={item.svgHref} imgSrc={item.imgSrc} imgTitle={item.imgTitle}
                       showContainer={props.showContainer} index={index + 1}/>
            </div>
          );
        })
      }
    </div>
  );
};
RightIcons.propTypes = {
  showContainer: PropTypes.func
};

export default RightIcons;
