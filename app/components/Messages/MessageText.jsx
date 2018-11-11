import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MessageText.scss';

const cx = classNames.bind(styles);

const MessageText = ({
  id,
  text,
  className,
  isBot,
}) => {
  const msgUserType = (isBot) ? 'botMsg' : 'userMsg';
  return (
    <div id={id} className={cx('message-text', 'message', msgUserType, className)}>
      <span>{text}</span>
    </div>
  );
};

MessageText.defaultProps = {
  className: '',
  isBot: false,
};

MessageText.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isBot: PropTypes.bool,
};
export default MessageText;

