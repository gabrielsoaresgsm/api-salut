import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data} = useSession()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>{data?.user?.name}</h2>
        <button onClick={() => signIn('google')}>Entrar com Google</button>
      </main>
    </>
  )
}