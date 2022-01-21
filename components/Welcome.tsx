import TypingText from './TypingText'

const welcomeStyle = { margin: '20vh auto auto auto' }

const Welcome = () => (
  <div style={welcomeStyle}>
    <h1 className="title">Hi, I&apos;m Michael.</h1>
    <TypingText />
  </div>
)

export default Welcome
