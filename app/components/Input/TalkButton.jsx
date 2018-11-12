import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import img from '../../assets/images/microphone.svg';
import imgOn from '../../assets/images/microphone-on.svg';

class TalkButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      talkOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { talkOn } = this.state;
    this.setState({
      talkOn: !talkOn,
    });
  }

  render() {
    const { id, className } = this.props;
    const imgIcon = (this.state.talkOn) ? imgOn : img;
    return (
      <button id={id} type="button" className={classNames('svg-button', className)} onClick={this.handleClick}>
        <img src={imgIcon} alt="" />
      </button>
    );
  }
}

TalkButton.defaultProps = {
  className: '',
};

TalkButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TalkButton;
