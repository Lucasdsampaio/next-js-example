import Head from 'next/head'

import Logo from "../assets/image.svg"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>Hei</h1>
      </main>
    </div>
  )
}
