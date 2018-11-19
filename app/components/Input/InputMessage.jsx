import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputMessage.scss';

const cx = classNames.bind(styles);

class IputMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.props.addUserMessage(this.state.text);
      this.setState({ text: '' });
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { id, className, placeHolder } = this.props;
    return (
      <input type="text" id={id} placeholder={placeHolder} className={cx('input-box', className)} value={this.state.text} onChange={e => this.handleChange(e)} onKeyPress={e => this.handleKeyPress(e)} />
    );
  }
}

IputMessage.defaultProps = {
  placeHolder: 'Type your message and press enter.',
  className: '',
  addUserMessage: () => {},
};

IputMessage.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  addUserMessage: PropTypes.func,
};
export default IputMessage;

