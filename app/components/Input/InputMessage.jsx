import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputMessage.scss';

const cx = classNames.bind(styles);

const IputMessage = ({
  id,
  placeHolder,
  className,
}) => {
  return (
    <div id={id} className={cx('input-message', className)}>
      <input type="text" placeholder={placeHolder} className="input-box" />
    </div>
  );
};

IputMessage.defaultProps = {
  placeHolder: 'Type your message and press enter.',
  className: '',
};

IputMessage.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};
export default IputMessage;

