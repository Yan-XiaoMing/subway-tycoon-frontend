import React from 'react';
import PropTypes from 'prop-types';
import './style.less';


const IconBtn = (props) => {
  return (
    <div className='wrapper'>
      <div className='img-circle-wrapper'>
        <div className="img-circle">
          <span className="iconfont iconItem">&#xe63f;</span>
        </div>
      </div>
      <div className="img-title">
        <span className="img-title-item">分享</span>
      </div>
    </div>
  );
};
IconBtn.propTypes = {
  imgSrc: PropTypes.string,
  imgTitle: PropTypes.string
};
export default IconBtn;
