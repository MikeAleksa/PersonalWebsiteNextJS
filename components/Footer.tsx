const Footer = () => (
  <footer className="footer snap-end inverted">
    <div className={'contact-text footer-grid'}>
      <a
        href="https://angel.co/u/michael-aleksa"
        target="_blank"
        rel="noreferrer"
      >
        AngelList
      </a>
      <a href="https://github.com/mikealeksa" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/michael-aleksa/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
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
          href="https://github.com/MikeAleksa/PersonalWebsiteNextJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
        &nbsp;on Github.
      </p>
      <p className="footer-accent-text">
        <a href="mailto:michael@michaelaleksa.com">Contact Me</a>
      </p>
      <p>&copy; 2022 Michael Aleksa, All Rights Reserved</p>
    </div>
  </footer>
)

export default Footer
