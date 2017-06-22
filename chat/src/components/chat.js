//Forming the Chat with the Socket for Real Time Connection and chat

import React, {Component, PropTypes} from 'react';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import MessageComposer from './compose';


class Chat extends Component {

  handleSave(newMessage) {
        console.log(newMessage);
    }


  render(){

    return (
        <div>
      <MessageComposer onSave={this.handleSave} />
      </div>
    );      
}
}

export default Chat;
