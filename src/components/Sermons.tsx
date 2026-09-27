import { ScrollReveal } from './ScrollReveal'
import './Sermons.css'

const latest = {
  series: 'The Book of Ruth',
  title: 'Where You Go, I Will Go',
  speaker: 'Pastor David Chen',
  date: 'September 21, 2026',
  duration: '38 min',
}

const recent = [
  { title: 'Strength in the Waiting', date: 'Sep 14' },
  { title: 'A Harvest of Kindness', date: 'Sep 7' },
  { title: 'New Series: Ruth', date: 'Aug 31' },
]

export function Sermons() {
  return (
    <section id="sermons" className="section sermons">
      <div className="container sermons__layout">
        <ScrollReveal className="sermons__featured-wrap">
          <article className="sermon-featured">
            <div className="sermon-featured__media" aria-hidden>
              <div className="sermon-featured__thumb" />
              <button type="button" className="sermon-featured__play" aria-label="Play latest sermon">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden>
                  <path d="M0 0v22l20-11L0 0z" />
                </svg>
              </button>
              <span className="sermon-featured__duration">{latest.duration}</span>
            </div>
            <div className="sermon-featured__body">
              <p className="section-label">{latest.series}</p>
              <h2 className="sermon-featured__title">{latest.title}</h2>
              <p className="sermon-featured__meta">
                {latest.speaker} · {latest.date}
              </p>
              <div className="sermon-featured__actions">
                <a href="#visit" className="btn btn-primary">
                  Watch sermon
                </a>
                <a href="#visit" className="btn btn-ghost">
                  All messages
                </a>
              </div>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal className="sermons__aside-wrap">
          <div className="sermons__aside">
            <p className="section-label">Messages</p>
            <h3 className="sermons__heading">Recent teaching</h3>
            <ul className="sermons__list">
              {recent.map((s) => (
                <li key={s.title}>
                  <a href="#visit" className="sermons__list-item">
                    <span className="sermons__list-title">{s.title}</span>
                    <span className="sermons__list-date">{s.date}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="sermons__note">
              New messages every Sunday. Available on video, audio, and podcast.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
