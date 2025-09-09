import './App.css'
import LogForm from './components/guidancePage/LogForm'
import { Footer } from './components/homePage/Footer'
import { HomeFullContainer } from './components/homePage/FullContainer'
import { Navigation } from './components/homePage/navigation'
import Response from './Response'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
   <BrowserRouter>
    <div className="fixed w-full z-15 top-0">
        <Navigation/>
    </div>
    <div className='mt-27'>
   <Routes>

      <Route path="/instant" element={<Response />} />
      <Route path='/' element={<HomeFullContainer />} />
    </Routes>
    </div>
    {/* <Response/> */}
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
