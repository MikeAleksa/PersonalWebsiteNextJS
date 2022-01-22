import type { NextPage } from 'next'
import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michael Aleksa • Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer from New York, NY"
        />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
      </Head>

      <main className="main scroll-snap">
        <div className="wrapper snap center primary-bg">
          <Welcome />
        </div>
        <div className={'wrapper-grow snap center secondary-bg'}>
          <Experience />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
