import Auth0 from './Auth0';
import reducer from './reducer';
import middleware from './middleware';
import { createStore, secure, token, handleAuthentication, request } from './helpers';
import { socialConnection, loginUsernamePassword, handleLogin, loginError, signup, signUpError, logout, logoutError } from './actions';

import type { Auth0Conf } from 'TypeDefinitions';

let auth0;

export {
  auth0,
  socialConnection,
  loginUsernamePassword,
  handleLogin,
  loginError,
  signup,
  signUpError,
  secure,
  token,
  handleAuthentication,
  request,
  logout,
  logoutError,
};

export default (config: Auth0Conf) => {
  auth0 = new Auth0(config);

  return ({
    createStore,
    reducer,
    middleware: middleware(auth0),
  });
}
