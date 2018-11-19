import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputPanel.scss';
import InputMessage from './InputMessage';
import TalkButton from './TalkButton';

const cx = classNames.bind(styles);

const InputPanel = ({
  id,
  placeHolder,
  className,
  addUserMessage,
}) => {
  return (
    <div id={id} className={cx('input-panel', className)}>
      <InputMessage id={`input-msg-${id}`} placeHolder={placeHolder} addUserMessage={addUserMessage} />
      <TalkButton id="talk-button" />
    </div>
  );
};

InputPanel.defaultProps = {
  placeHolder: 'Type your message and press enter.',
  className: '',
  addUserMessage: () => {},
};

InputPanel.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  addUserMessage: PropTypes.func,
};
export default InputPanel;

