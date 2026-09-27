import './Ministries.css'

const ministries = [
  {
    title: 'Kids & Youth',
    description: 'Safe, joyful programs for infants through high school every Sunday.',
    icon: '◦',
  },
  {
    title: 'Small Groups',
    description: 'Weekly circles for study, prayer, and friendship in homes across the city.',
    icon: '◦',
  },
  {
    title: 'Outreach',
    description: 'Food pantry, shelter partnerships, and neighborhood care teams.',
    icon: '◦',
  },
  {
    title: 'Worship & Arts',
    description: 'Music, creative media, and a choir that welcomes every voice.',
    icon: '◦',
  },
]

export function Ministries() {
  return (
    <section id="ministries" className="section ministries">
      <div className="container">
        <div className="ministries__intro">
          <p className="section-label">Get connected</p>
          <h2 className="section-title">Ministries</h2>
          <p className="section-lead">
            Faith grows best in community. Find a place to serve, learn, and belong.
          </p>
        </div>

        <div className="ministries__grid">
          {ministries.map((m) => (
            <article key={m.title} className="ministry-card">
              <span className="ministry-card__icon" aria-hidden>
                {m.icon}
              </span>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
              <a href="#visit" className="ministry-card__link">
                Learn more
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
