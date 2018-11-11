import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TitleBar.scss';

const cx = classNames.bind(styles);

const Title = ({
  id,
  title,
  className,
}) => {
  return (
    <div id={id} className={cx('title', className)}>
      <h2>{title}</h2>
    </div>
  );
};

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
