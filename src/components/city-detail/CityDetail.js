import React, {Component} from 'react';
import './style.less';

class CityDetail extends Component {
  render() {
    var progressBg = (34912 / 50000) * 100;
    progressBg = parseInt(progressBg) + '%';
    const progress_bg = {
      width: progressBg
    };
    return (
      <div className="city-detail-wrapper">
        <div className="city-detail-back">
          <span className="city-detail-back-item">&lt;&lt;</span>
        </div>
        <div className="city-detail-main">
          <p className="city-detail-main-text">
            杭州地铁运营线路共4条：杭州地铁1号线、杭州地铁2号线、杭州地铁4号线、杭州地铁5号线，运营里程共135.36千米。
          </p>
        </div>
        <div className="city-detail-footer">
          <div className="city-detail-footer-top">
            <div className="city-detail-footer-logo">
              <svg className="icon city-detail-logo" aria-hidden="true">
                <use xlinkHref="#iconhangzhouditie"/>
              </svg>
            </div>
            <div className='city-detail-footer-devote'>
              <span className="footer-devote-item">捐赠</span>
            </div>
          </div>
          <div className="city-detail-footer-label">
            <span className="footer-label-item">今日获赠铁轨数</span>
          </div>
          <div className="city-detail-footer-progress">
            <span className="progress-item-num">34912</span>
            <div className="progress-item-bg" style={{...progress_bg}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityDetail;
