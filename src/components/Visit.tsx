import './Visit.css'

export function Visit() {
  return (
    <section id="visit" className="section visit">
      <div className="container">
        <div className="visit__card">
          <div className="visit__content">
            <p className="section-label">Plan your visit</p>
            <h2 className="section-title">We&apos;d love to meet you</h2>
            <p className="visit__text">
              First time? Stop by the welcome desk — we&apos;ll save you a seat, help
              with kids&apos; check-in, and answer any questions over coffee.
            </p>

            <div className="visit__details">
              <div>
                <h3>Location</h3>
                <p>
                  742 Grace Avenue
                  <br />
                  Your City, ST 12345
                </p>
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                  <br />
                  <a href="mailto:hello@gracecommunity.org">hello@gracecommunity.org</a>
                </p>
              </div>
            </div>

            <div className="visit__actions">
              <a href="mailto:hello@gracecommunity.org" className="btn btn-primary">
                Say hello
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="visit__map" aria-label="Map placeholder">
            <div className="visit__map-inner">
              <span>742 Grace Avenue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
