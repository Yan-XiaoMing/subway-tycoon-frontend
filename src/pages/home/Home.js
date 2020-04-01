import React, {Component} from 'react';
import '../../components/icon-btn/IconBtn';
import IconBtn from '../../components/icon-btn/IconBtn';
import MsgLabel from '../../components/msg-label/MsgLabel';
class Home extends Component {
  render() {
    return (
      <div>
        <MsgLabel/>
        <IconBtn/>
      </div>
    );
  }
}

export default Home;
