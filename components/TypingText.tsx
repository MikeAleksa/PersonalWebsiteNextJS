import Typewriter from 'typewriter-effect'

const TypingText = () => (
  <div className="description">
    <Typewriter
      options={{
        strings: [
          'Full-Stack Web Developer',
          'DevOps Practitioner',
          'Machine Learning Engineer',
          'Cloud Architect',
          'Software Development Generalist',
        ],
        cursor: '',
        cursorClassName: 'cursor',
        autoStart: true,
        loop: true,
        skipAddStyles: true,
      }}
    />
  </div>
)

export default TypingText
