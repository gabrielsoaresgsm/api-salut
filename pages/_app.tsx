import '../styles/globals.css'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'
import { Session } from 'next-auth'

export default function App({ Component, pageProps }: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
