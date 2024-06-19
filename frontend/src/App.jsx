import { BrowserRouter } from 'react-router-dom'
import Home from './components/sections/Home'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Units from './components/sections/Units'
import Testemonials from './components/sections/Testemonials'
import Contact from './components/sections/Contact'
import Navbar from './components/sections-parts/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[120rem] mx-auto font-segoe-ui">
          <Navbar />
          <Home />
          <Services />
          <Team />
          <Units />
          <Testemonials />
          <Contact />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
