import './ServiceTimes.css'

const services = [
  {
    day: 'Sunday',
    time: '9:00 AM',
    name: 'Morning Worship',
    note: 'Contemporary music & teaching',
  },
  {
    day: 'Sunday',
    time: '11:00 AM',
    name: 'Traditional Service',
    note: 'Hymns, choir & communion',
  },
  {
    day: 'Wednesday',
    time: '7:00 PM',
    name: 'Midweek Gathering',
    note: 'Prayer, study & community',
  },
]

export function ServiceTimes() {
  return (
    <section id="services" className="section service-times">
      <div className="container">
        <div className="service-times__header">
          <div>
            <p className="section-label">Gather with us</p>
            <h2 className="section-title">Service times</h2>
          </div>
          <p className="section-lead service-times__lead">
            Whether it&apos;s your first Sunday or your hundredth, you&apos;re welcome
            exactly as you are.
          </p>
        </div>

        <ul className="service-times__grid">
          {services.map((s) => (
            <li key={`${s.day}-${s.time}`} className="service-card">
              <div className="service-card__time">
                <span className="service-card__day">{s.day}</span>
                <span className="service-card__clock">{s.time}</span>
              </div>
              <div className="service-card__body">
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
