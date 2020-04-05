import React from 'react';
import './style.less';

const HomeTablet = (props) => {

  return (
    <div className="tablet-container" onClick={() => props.showCard(1)}>
      <div className="tablet-wrapper">
        <span className="tablet-text">凤起路</span>
      </div>
    </div>
  );
};

export default HomeTablet;
