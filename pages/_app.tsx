import React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const NoSsr = ({ Component, pageProps }: AppProps) => (
  <React.Fragment><Component {...pageProps} /></React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
