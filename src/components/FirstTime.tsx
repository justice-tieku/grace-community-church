import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import './FirstTime.css'

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Come as you are. You\'ll see everything from jeans to suits — comfort matters more than dress code.',
  },
  {
    q: 'How long is the service?',
    a: 'Most gatherings last about 75 minutes, including worship, teaching, and a time of response.',
  },
  {
    q: 'What about my kids?',
    a: 'Grace Kids opens 15 minutes before each service. Check-in is at the welcome desk — our team will walk you through it.',
  },
  {
    q: 'Where do I park?',
    a: 'Free parking is available in the lot behind the building and on Grace Avenue. Guest spots are near the main entrance.',
  },
]

export function FirstTime() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="first-time" className="section first-time">
      <div className="container first-time__grid">
        <ScrollReveal className="first-time__intro">
          <p className="section-label">First time?</p>
          <h2 className="section-title">What to expect on Sunday</h2>
          <p className="section-lead">
            No perfect people — just a community learning to follow Jesus together. Here are
            answers to questions we hear most often.
          </p>
          <ul className="first-time__steps">
            <li>
              <span>1</span>
              <div>
                <strong>Arrive early</strong>
                <p>Coffee in the lobby from 8:30 AM. Grab a bulletin and say hi.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Find your seat</strong>
                <p>Usher teams can help — or sit anywhere that feels right.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Stay for connection</strong>
                <p>Stick around after service — we&apos;d love to meet you personally.</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="first-time__faq-wrap">
          <div className="first-time__faq">
            {faqs.map((item, i) => {
              const open = openIndex === i
              return (
                <div key={item.q} className={`faq-item ${open ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {item.q}
                    <span className="faq-item__icon" aria-hidden />
                  </button>
                  <div className="faq-item__panel" hidden={!open}>
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
