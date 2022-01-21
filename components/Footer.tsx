const Footer = () => (
  <footer className="footer inverted">
    <div className={'contact-text footer-grid'}>
      <a>AngelList</a>
      <a>GitHub</a>
      <a>LinkedIn</a>
    </div>
    <div>
      <p
        className="footer-text"
        style={{ margin: '1rem 0 0 0', letterSpacing: '0.1rem' }}
      >
        &apos;&apos;&apos;
      </p>
    </div>
    <div className="footer-text">
      <p>
        Built with Next.js and Typescript. See the&nbsp;
        <a
          href="https://github.com/MikeAleksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
        &nbsp;on Github
      </p>
      <p className="footer-accent-text">
        <a>Hire Me</a>
      </p>
      <p>&copy; 2022 Michael Aleksa, All Rights Reserved</p>
    </div>
  </footer>
)

export default Footer
