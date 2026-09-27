import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual" aria-hidden>
          <div className="about__frame">
            <div className="about__photo">
              <div className="about__photo-inner" />
            </div>
            <blockquote className="about__quote">
              <p>&ldquo;We exist to love God, love people, and serve our city.&rdquo;</p>
              <footer>— Our mission</footer>
            </blockquote>
          </div>
        </div>

        <div className="about__copy">
          <p className="section-label">Who we are</p>
          <h2 className="section-title">Rooted in grace, growing together</h2>
          <p className="about__text">
            For over forty years, Grace Community has been a steady presence in this
            neighborhood — a family of believers from every walk of life, united by
            hope rather than perfection.
          </p>
          <p className="about__text">
            We believe church should feel honest and warm: space for questions,
            room for rest, and a community that shows up for one another through
            every season.
          </p>
          <ul className="about__stats">
            <li>
              <strong>1982</strong>
              <span>Founded</span>
            </li>
            <li>
              <strong>1,200+</strong>
              <span>Members</span>
            </li>
            <li>
              <strong>12</strong>
              <span>Ministries</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
