import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Headshot from '../public/headshot-web.png'
import rotate from '../styles/Rotate.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michael Aleksa • Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer from New York, NY"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <div className="wrapper primary-bg">
          <div>
            <h1 className="title">Hi, I&apos;m Michael.</h1>
            <div className={rotate['rw-wrapper']}>
              <p
                className={`description ${rotate['rw-words']} ${rotate['rw-words1']}`}
              >
                <span>Full-Stack Web Development</span>
                <span>Machine Learning</span>
                <span>DevOps</span>
                <span>Cloud Engineering</span>
              </p>
            </div>
          </div>
          <div className="center">
            <Image
              className="headshot"
              src={Headshot}
              alt="Michael Aleksa"
              // layout="responsive"
              height={450}
              width={450}
            />
          </div>
        </div>

        <div className={'wrapper center secondary-bg'}>
          <h2 className="description">Experience will go here</h2>
        </div>
      </main>

      <footer className="footer primary-bg">
        <span>Built with Next.js and Typescript</span>
        <span className="hidden">&nbsp;--&nbsp;</span>
        <a
          href="https://github.com/MikeAleksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          See source code on Github
        </a>
      </footer>
    </div>
  )
}

export default Home
