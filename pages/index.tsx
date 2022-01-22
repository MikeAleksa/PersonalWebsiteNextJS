import type { NextPage } from 'next'
import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michael Aleksa</title>
        <meta
          name="description"
          content="Michael Aleksa is a software Engineer working remotely from New York, NY. Currently at Vocal Clarity and previously at EcoLong."
        />
        <meta
          name="keywords"
          content="Michael Aleksa, software engineering, full-stack development, backend development, front-end development, machine learning, cloud engineering, devops, mlops"
        />
        <meta name="author" content="Michael Aleksa"></meta>
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
