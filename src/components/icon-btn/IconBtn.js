import React from 'react';
import PropTypes from 'prop-types';
import './style.less';


const IconBtn = (props) => {
  return (
    <div className='iconBtn-wrapper'>
      <div className='img-circle-wrapper'>
        <div className="img-circle">
          <span className="iconfont img-icon-item">{props.imgSrc}</span>
        </div>
      </div>
      <div className="img-title">
        <span className="img-title-item">{props.imgTitle}</span>
      </div>
    </div>
  );
};
IconBtn.propTypes = {
  imgSrc: PropTypes.string,
  imgTitle: PropTypes.string
};
export default IconBtn;
