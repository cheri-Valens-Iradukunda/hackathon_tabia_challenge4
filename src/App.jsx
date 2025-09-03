import './App.css'
import { Footer } from './components/homePage/Footer'
import { HomeFullContainer } from './components/homePage/FullContainer'
import { Navigation } from './components/homePage/navigation'
import Response from './Response'

function App() {

  return (
    <>
    <div className="fixed w-full top-0">
        <Navigation/>
    </div>
      <HomeFullContainer />
    {/* <Response/> */}
    <Footer />
    </>
  )
}

export default App
