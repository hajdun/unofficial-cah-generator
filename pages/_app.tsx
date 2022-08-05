import React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { wrapper, store } from '../store/store'
import { Provider } from 'react-redux'

const NoSsr = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </React.Fragment>
)

export default wrapper.withRedux(dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
}))
