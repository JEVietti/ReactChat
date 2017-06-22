//Chat Composer for Chat Form Submission to be displayed in a Chat/Chat Container

import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';


class Composer extends Component {

    

    constructor(props, context){

        super(props, context);
        this.state = {
            text : ''
        }

    }

    handleMessageChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(event) {
        //console.log(event);
  
      event.preventDefault();
      var newMessage = {
        id: `${Date.now()}${uuid.v4()}`,    
       text: this.state.text 
       }

      this.props.onSave(newMessage);
      this.setState({ text: '', typing: false });
    }
  



    render(){

        return (
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          autoFocus="true"
          ref = "message"
          placeholder="Type here to chat!"
          value = {this.state.text} 
          onChange = {this.handleMessageChange.bind(this)}
        />
         <input type="submit" value="Submit" />
         </form>
      </div>
    );

    }
}

export default Composer; 
