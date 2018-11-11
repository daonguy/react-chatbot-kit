import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Chat.scss';
import TitleBar from '../TitleBar';
import InputMessage from '../InputMessage';
import MessageList from '../Messages/MessageList';

const cx = classNames.bind(styles);

const Chat = ({
  id,
  className,
}) => {
  return (
    <div id={id} className={cx('chat-panel', className)}>
      <TitleBar id="title" title="Chatbot" />
      <MessageList id="message-list" />
      <InputMessage id="input-message" />
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
