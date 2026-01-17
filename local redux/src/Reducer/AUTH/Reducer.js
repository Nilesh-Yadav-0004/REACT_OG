import * as types from './Action';

const tokenValue = localStorage.getItem('token');

const initialValue = {
  token: tokenValue || '',
  isAuth: tokenValue ? true : false,
  isError: null,
  isLoading: false,
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESSFULL: {
      
      if (action.payload !== 'fakeToken') return state;

      localStorage.setItem('token', action.payload);

       return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload
       };
    }
     
    default:
      return state;
  }
};