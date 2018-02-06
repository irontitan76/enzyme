import React from 'react';
import { Provider } from 'react-redux';
// import { initialize } from './actions/session';
import store from './js/store';
import Main from './js/containers/Main';

// const locale = getCurrentLocale();
// addLocaleData(en);
// let messages;
// try {
//   messages = require(`./messages/${locale}`);
// } catch (e) {
//   messages = require('./messages/en-US');
// }
// const localeData = getLocaleData(messages, locale);

if (window.location.pathname !== '/login') {
  // store.dispatch(initialize(window.location.pathname));
}

export default () => (
  <Provider store={store}>
    {/*<IntlProvider locale={localeData.locale} messages={localeData.messages}>*/}
      <Main />
    {/*</IntlProvider>*/}
  </Provider>
);
