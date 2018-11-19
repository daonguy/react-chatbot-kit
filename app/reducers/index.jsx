import * as types from '../constants/ActionTypes';

const getInitialState = () => {
  return {
    data: [],
    isLoading: false,
  };
};

const initialState = getInitialState();

const ChatData = (state = initialState, action) => {
  console.log('action=', action);
  switch (action.type) {
    case types.LOAD_HISTORY_REJECTED:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false,
      });
    case types.LOAD_HISTORY:
      return Object.assign({}, state, {
        data: action.payload.data,
        isLoading: false,
      });
    case types.ADD_MESSAGE:
      return Object.assign({}, state, {
        data: [...state.data, action.data],
        isLoading: false,
      });
    default:
      return state;
  }
};

export default ChatData;
