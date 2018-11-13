import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import MessageText from './MessageText';
import styles from './MessageList.scss';

const cx = classNames.bind(styles);

const MessageList = ({
  id,
  className,
  chatMessages,
}) => {
  return (
    <div id={id} className={cx('message-list', className)}>
      {
        chatMessages.map((msg, index) => (
          <MessageText id={`msgtxt-${index}`} key={msg.id} text={msg.text} isBot={msg.isBot} />
        ))
      }
    </div>
  );
};

MessageList.defaultProps = {
  className: '',
  chatMessages: [],
};

MessageList.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  chatMessages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    isBot: PropTypes.bool,
  })),
};

export default MessageList;

