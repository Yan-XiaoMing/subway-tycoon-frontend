import React from 'react';
import PropTypes from 'prop-types';
import './style.less';


const IconBtn = (props) => {
  return (
    <div className='iconBtn-wrapper' onClick={() => props.showContainer(props.index)}>
      <div className='img-circle-wrapper'>
        <div className="img-circle">
          {props.svgHref != null && (
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={props.svgHref}/>
            </svg>
          )}
          {(props.svgHref == null || false) && (
            <span className="iconfont img-icon-item">{props.imgSrc}</span>
          )}
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
  imgTitle: PropTypes.string,
  svgHref: PropTypes.string
};
export default IconBtn;
