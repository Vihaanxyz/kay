import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You Can Now Use Alpha 😎" />
        <p className="description">
          12632166441872185722</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
