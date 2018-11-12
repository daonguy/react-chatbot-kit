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
}) => {
  const chatTestData = [
    {
      text: 'Hello', id: '1', isBot: false,
    },
    {
      text: 'Howdy, How can I help you?', id: '2', isBot: true,
    },
  ];
  return (
    <div id={id} className={cx('chat-panel', className)}>
      <TitleBar id="title" title="Chatbot" />
      <MessageList id="message-list" dataSource={chatTestData} />
      <InputPanel id="input-panel" />
    </div>
  );
};

Chat.defaultProps = {
  className: '',
};

Chat.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Chat;
