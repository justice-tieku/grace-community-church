import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__mark" aria-hidden />
          <p className="site-footer__name">Grace Community Church</p>
          <p className="site-footer__tagline">Love God. Love people. Serve the city.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#ministries">Ministries</a>
          <a href="#sermons">Sermons</a>
          <a href="#first-time">First visit</a>
          <a href="#give">Give</a>
          <a href="#visit">Visit</a>
        </nav>

        <div className="site-footer__social">
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="YouTube">
            YT
          </a>
          <a href="#" aria-label="Facebook">
            FB
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} Grace Community Church. All rights reserved.</p>
        <a href="#">Privacy</a>
      </div>
    </footer>
  )
}
