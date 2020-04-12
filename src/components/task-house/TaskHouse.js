import React, {Component} from 'react';
import './style.less';
import TaskCard from './task-card/TaskCard';
import {taskCardList} from '../../api/config';

class TaskHouse extends Component {
  render() {
    return (
      <div className='task-house-wrapper'>
        {
          taskCardList.map((item, index) => {
            return <TaskCard key={index + item.title} content={item}/>;
          })
        }
      </div>
    );
  }
}

export default TaskHouse;
