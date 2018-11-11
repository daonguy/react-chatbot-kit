import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import MessageText from './MessageText';
import styles from './MessageList.scss';

const cx = classNames.bind(styles);

const MessageList = ({
  id,
  className,
}) => {
  return (
    <div id={id} className={cx('message-list', className)}>
      <MessageText id="1" text="BotText BotText BotText BotText " isBot="true" />
      <MessageText id="2" text="HumanText HumanText HumanText HumanText" />
    </div>
  );
};

MessageList.defaultProps = {
  className: '',
};

MessageList.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MessageList;

