import './Hero.css'

export function Hero() {
  return (
    <section id="welcome" className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="hero__gradient" />
        <div className="hero__arc" />
      </div>

      <div className="container hero__content">
        <p className="section-label reveal">Welcome home</p>
        <h1 className="hero__title reveal reveal-delay-1">
          A place to belong,
          <br />
          <em>believe</em>, and become.
        </h1>
        <p className="hero__lead reveal reveal-delay-2">
          Grace Community is a welcoming church in the heart of the city — where
          ancient faith meets everyday life, and everyone has a seat at the table.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <a href="#visit" className="btn btn-primary">
            Join us Sunday
          </a>
          <a href="#about" className="btn btn-ghost">
            Our story
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
