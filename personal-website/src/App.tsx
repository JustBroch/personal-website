import './App.css'
import { Hero1 } from './components/hero1'
import { Navbar1 } from './components/navbar1'
import Strand from './assets/Strand.jpg' 

function App() {

  return (
    <>
      <Navbar1 />
      <main>
        <section>
          <Hero1 heading={'Who am I'} description={'About me'} image={{
            src: Strand,
            alt: 'Photo of me at the beach',
          }} />
        </section>
      </main>
    </>
  )
}

export default App
