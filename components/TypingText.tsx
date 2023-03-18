import Typewriter from 'typewriter-effect'

const TypingText = () => (
  <div className="description">
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'DevOps Practitioner',
          'Machine Learning Engineer',
          'Cloud Architect',
          'Backend Engineer',
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
