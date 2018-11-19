import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions';
import Chat from '../components/Chat';

class ChatApp extends React.Component {
  componentDidMount() {
    this.props.actions.getHistory();
  }

  render() {
    const { data } = this.props;
    const dataStore = {
      messages: data,
      addUserMessage: this.props.actions.addUserMessage,
    };
    return (
      <div>
        <Chat id="chatbot-main" chatStore={dataStore} />
      </div>
    );
  }
}

ChatApp.defaultProps = {
  actions: {
    addUserMessage: () => {},
    getHistory: () => {},
  },
  data: [],
};

ChatApp.propTypes = {
  actions: PropTypes.shape({
    getHistory: PropTypes.func,
    addUserMessage: PropTypes.func,
  }),
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    isBot: PropTypes.bool,
  })),
};

function mapStateToProps(state) {
  // map state (from reducers) to props for the React app.
  // usually this is 1-to-1.
  const { data, isLoading } = state;
  return {
    data,
    isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
