import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Chat.scss';
import TitleBar from '../TitleBar';
import InputPanel from '../Input/InputPanel';
import MessageList from '../Messages/MessageList';

const cx = classNames.bind(styles);

const Chat = ({
  id,
  className,
  chatStore,
}) => {
  return (
    <div id={id} className={cx('chat-panel', className)}>
      <TitleBar id="title" title="Chatbot" />
      <MessageList id="message-list" chatMessages={chatStore.messages} />
      <InputPanel id="input-panel" addUserMessage={chatStore.addUserMessage} />
    </div>
  );
};

Chat.defaultProps = {
  className: '',
  chatStore: {
    messages: [],
  },
};

Chat.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  chatStore: PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      isBot: PropTypes.bool,
    })),
    addUserMessage: PropTypes.func.isRequired,
  }),
};

export default Chat;
