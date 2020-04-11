import React from 'react';
import {rankListMock} from '../../api/config';
import './style.less';

const RankList = (props) => {

  return (
    <div className='rank-list-wrapper'>
      <div className='rank-list-title'>
        <span className='rank-list-title-item'>{rankListMock[props.type].title}排行榜</span>
      </div>
      {
        rankListMock[props.type].list.map((item, index) => {
          return (
            <div className='rank-list-item' key={'rankList' + index}>
              <div className='rank-list-rankNum'>
                {item.num <= 3 ? (
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref={item.rankIcon}/>
                    </svg>
                  ) :
                  <span className='rank-list-rankNum-item'>{item.num}</span>
                }
              </div>
              <div className='rank-list-headIcon'>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={item.icon}/>
                </svg>
              </div>
              <span className='rank-list-name'>{item.name}</span>
              <span className='iconfont rank-list-font'>&#xe60d;</span>
              <span className='rank-list-collection'>{item.collect}</span>
            </div>
          )
        })
      }
    </div>
  );
};

export default RankList;
