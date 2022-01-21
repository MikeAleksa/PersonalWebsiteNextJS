import Image from 'next/image'
import Headshot from '../public/images/headshot-web.png'

const AboutMe = () => (
  <div className="center hide-on-mobile">
    <Image
      className="headshot"
      src={Headshot}
      alt="Michael Aleksa"
      height={350}
      width={350}
    />
  </div>
  /* <div>
      <p className="description">
        I&apos;m a software engineering generalist working remotely from
        NYC with a passion for seeing products come to life throughout the
        full software design life cycle.
      </p>
      <p className="description">Design, implement, test, deploy.</p>
      <p className="description">
        Machine learning practitioner. Perpetual student. Mentor and
        mentee.
      </p>
    </div> */
)

export default AboutMe
