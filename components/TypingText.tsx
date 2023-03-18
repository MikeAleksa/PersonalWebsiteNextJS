import Typewriter from 'typewriter-effect'

const TypingText = () => (
  <div className="description">
    <Typewriter
      options={{
        strings: [
          'Backend Engineer',
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
