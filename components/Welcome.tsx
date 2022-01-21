import TypingText from './TypingText'

const welcomeStyle = { margin: '25vh auto auto auto' }

const Welcome = () => (
  <div className="wrapper snap center primary-bg">
    <div style={welcomeStyle}>
      <h1 className="title">Hi, I&apos;m Michael.</h1>
      <TypingText />
    </div>
  </div>
)

export default Welcome
