import Data from './Data'
import Hero from './Hero'
import Places from './Places'
import About from './About'

import Footer from './Footer'
import Features from './Features'


function Home() {
  
  return (
    
    <div>
      <Data />
      <Hero />
      <Places />
      <section id='about'>
      <About />
      </section>
      <Features/>
      
      <section id='footer'>
      <Footer />
      </section>
    </div>
    
  )
}

export default Home;
