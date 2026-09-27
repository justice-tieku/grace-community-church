import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServiceTimes } from './components/ServiceTimes'
import { About } from './components/About'
import { Ministries } from './components/Ministries'
import { Events } from './components/Events'
import { Sermons } from './components/Sermons'
import { FirstTime } from './components/FirstTime'
import { Give } from './components/Give'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceTimes />
        <About />
        <Ministries />
        <Sermons />
        <Events />
        <FirstTime />
        <Give />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
