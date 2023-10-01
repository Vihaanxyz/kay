import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alpha Key</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You Can Now Use Alpha 😎. Your Key Is Below ⬇️" />
        <p className="description">
         key: 12632166441872185722
        </p>
      </main>

      <Footer />
    </div>
  )
}
