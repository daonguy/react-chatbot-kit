import React from 'react';
// import img from '../assets/images/react_logo_512x512.png';
import Chat from './Chat';

const chatTestData = [
  {
    text: 'Hello', id: '1', isBot: false,
  },
  {
    text: 'Howdy, How can I help you?', id: '2', isBot: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addUserMessage = (message) => {
      const newMsg = {
        message,
        isBot: false,
      };
      this.setState(state => ({
        messages: [...state.messages, newMsg],
      }));
    };
    this.state = {
      messages: chatTestData,
      addUserMessage: this.addUserMessage,
    };
  }

  render() {
    return (
      <div>
        <Chat id="chatbot-main" chatStore={this.state} />
      </div>
    );
  }
}

export default App;
