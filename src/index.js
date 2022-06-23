import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import theme from './SherlockMuiTheme'
import { CookiesProvider } from 'react-cookie'
import UserDetailsProvider from './features/user/UserDetailsProvider'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <UserDetailsProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </UserDetailsProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
