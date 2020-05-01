import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
  firstname: '',
  lastname: '',
  telnum: '',
  email: '',
  agree: false,
  contactType: 'Tel.',
  message: '',
};

export const Feedback = (state = InitialFeedback, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedbacks: state.feedback.concat(feedback) };

    default:
      return state;
  }
};
