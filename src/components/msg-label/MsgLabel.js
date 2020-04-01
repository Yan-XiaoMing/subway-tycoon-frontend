import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const MsgLabel = (props) => {
  return (
    <div className="msg-label-wrapper">
      <div className="msg-label-img-wrapper">
        <img src={require('../../assets/img/' + props.iconSrc + '.png')} alt="金币"/>
      </div>
      <span className="msg-label-count">
        {props.count}
        </span>
    </div>
  );
};

MsgLabel.propTypes = {
  iconSrc: PropTypes.string,
  count: PropTypes.string
};

export default MsgLabel;
