import './Events.css'

const events = [
  {
    date: { month: 'Oct', day: '04' },
    title: 'Community Picnic',
    meta: 'Saturday · 12:00 PM · Riverside Park',
  },
  {
    date: { month: 'Oct', day: '12' },
    title: 'Baptism Sunday',
    meta: 'Sunday · 11:00 AM · Main Sanctuary',
  },
  {
    date: { month: 'Oct', day: '19' },
    title: 'Marriage Enrichment Night',
    meta: 'Friday · 6:30 PM · Fellowship Hall',
  },
]

export function Events() {
  return (
    <section id="events" className="section events">
      <div className="container events__layout">
        <div className="events__aside">
          <p className="section-label">What&apos;s happening</p>
          <h2 className="section-title">Upcoming events</h2>
          <p className="section-lead">
            From worship to workshops, there&apos;s always something to look forward to.
          </p>
          <a href="#visit" className="btn btn-ghost events__btn">
            View full calendar
          </a>
        </div>

        <ul className="events__list">
          {events.map((e) => (
            <li key={e.title} className="event-row">
              <div className="event-row__date">
                <span className="event-row__month">{e.date.month}</span>
                <span className="event-row__day">{e.date.day}</span>
              </div>
              <div className="event-row__info">
                <h3>{e.title}</h3>
                <p>{e.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
