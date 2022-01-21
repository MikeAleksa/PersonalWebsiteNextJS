import Typewriter from 'typewriter-effect'
import cursor from '../styles/Cursor.module.css'

const TypingText = () => (
  <div className="description">
    <Typewriter
      options={{
        strings: [
          'Full-Stack Web Development',
          'Machine Learning',
          'DevOps',
          'Cloud Engineering',
        ],
        cursor: '',
        cursorClassName: cursor.cursor,
        autoStart: true,
        loop: true,
        skipAddStyles: true,
      }}
    />
  </div>
)

export default TypingText
