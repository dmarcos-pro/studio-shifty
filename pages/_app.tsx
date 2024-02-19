import type { AppProps } from 'next/app'
import Layout from './layout'
import "./globals.css"

type MyAppProps = AppProps & {
  Component: any
  pageProps: any
}

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}