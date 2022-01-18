import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Headshot from '../public/headshot-web.png'
import styles from '../styles/Home.module.css'
import rotate from '../styles/Rotate.module.css'
// import animate from 'animate.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Aleksa • Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer from New York, NY"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Hi, I&apos;m Michael.</h1>
          <div className={rotate['rw-wrapper']}>
            <p
              className={`${styles.description} ${rotate['rw-words']} ${rotate['rw-words1']}`}
            >
              <span>Full-Stack Web Development</span>
              <span>Machine Learning</span>
              <span>DevOps</span>
              <span>Cloud Engineering</span>
            </p>
          </div>
          <Image
            className={styles.headshot}
            src={Headshot}
            alt="Michael Aleksa"
            height={500}
            width={500}
          />
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/MikeAleksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Next.js and Typescript -- See source code on Github
        </a>
      </footer>
    </div>
  )
}

export default Home
