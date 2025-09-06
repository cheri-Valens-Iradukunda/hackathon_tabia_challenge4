import './App.css'
import LogForm from './components/guidancePage/LogForm'
import { Footer } from './components/homePage/Footer'
import { HomeFullContainer } from './components/homePage/FullContainer'
import { Navigation } from './components/homePage/navigation'
import Response from './Response'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <>
   <BrowserRouter>
    <div className="fixed w-full z-15 top-0">
        <Navigation/>
    </div>
    <div className='mt-50'>
   <Switch>

      <Route path="/instant" ><Response /></Route>
      <Route path='/'><HomeFullContainer /></Route>
      <HomeFullContainer />
    </Switch>
    </div>
    {/* <Response/> */}
    {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
