import axios from 'axios';
import * as types from '../constants/ActionTypes';

const API_HIST_URL = '/api/v1/getChatHistory';

export const addUserMessage = (message) => {
  return {
    data: {
      text: message,
      isBot: false,
    },
    type: types.ADD_MESSAGE,
  };
};
export const addBotMessage = (message) => {
  return {
    data: {
      text: message,
      isBot: true,
    },
    type: types.ADD_MESSAGE,
  };
};
/*
const loadHistoryRequest = () => {
  return {
    type: types.LOAD_HISTORY_REQUEST,
  };
};
const loadHistorySuccess = (messages) => {
  return {
    data: messages,
    type: types.LOAD_HISTORY_SUCCESS,
  };
};
const loadHistoryFailure = (error) => {
  return {
    error,
    type: types.LOAD_HISTORY_FAILURE,
  };
}; */
const getHistory = () => {
  const histData = axios.get(API_HIST_URL);
  return {
    type: types.LOAD_HISTORY,
    payload: histData,
  };
};

const actions = {
  getHistory,
  addUserMessage,
};
export default actions;
