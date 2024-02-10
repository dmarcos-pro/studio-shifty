import React from 'react';
import Head from 'next/head'

type Props = {
  children: React.ReactNode;
}

const IndexPage = ({ children }: Props) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default IndexPage