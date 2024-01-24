import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

function App () {
  return (
    <main className='bg-black font-garamond  h-screen overflow-y-scroll z-10 snap-y snap-mandatory overflow-x-hidden'>
      <section id='home' className='snap-center'>
        <Home />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </main>
  )
}

export default App
