import type { AppProps } from 'next/app'
import Layout from './layout'
import "./globals.css"

type MyAppProps = AppProps & {
  Component: any
  pageProps: any
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}