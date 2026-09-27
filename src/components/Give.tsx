import { ScrollReveal } from './ScrollReveal'
import './Give.css'

export function Give() {
  return (
    <section id="give" className="section give">
      <div className="container">
        <ScrollReveal>
          <div className="give__banner">
            <div className="give__copy">
              <p className="section-label">Generosity</p>
              <h2 className="section-title give__title">Give online</h2>
              <p className="give__text">
                Your gifts fuel ministry in our city — from Sunday worship to outreach,
                counseling, and care for families in need. Thank you for investing in what
                God is doing here.
              </p>
            </div>
            <div className="give__actions">
              <a href="#visit" className="btn btn-primary give__btn-primary">
                Give securely
              </a>
              <a href="#visit" className="btn give__btn-secondary">
                Other ways to give
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
