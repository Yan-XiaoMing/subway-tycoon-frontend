import React from 'react';
import './style.less';

const TaskCard = (props) => {
  const content = props.content;
  let stateItem;
  let style = {background: content.color};
  switch (content.state) {
    case 0:
      stateItem = '未完成';
      break;
    case 1:
      stateItem = '已完成';
      break;
    case 2:
      stateItem = '敬请期待';
      break;
    default:
      stateItem = '未完成';
      break;
  }
  return (
    <div className="task-card-wrapper" style={style}>
      <div className="task-card-icon">
        <img src={require(`../../../assets/img/${content.icon}.svg`)}/>
      </div>
      <div className="task-card-title">
        <span className="task-card-title-item">{content.title}</span>
      </div>
      <div className="task-card-gold">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#iconxiaochengxu_tubiao-"/>
        </svg>
        <span className="task-card-label-item">{content.money}</span>
      </div>
      <div className="task-card-label">
        <span className="task-card-label-item">{stateItem}</span>
      </div>
    </div>
  );
};

export default TaskCard;
