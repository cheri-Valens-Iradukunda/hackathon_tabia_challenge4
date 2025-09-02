import { About } from "./About"
import { Careers } from "./Careers"
import { Footer } from "./Footer"
import { Navigation } from "./navigation"
import { Services } from "./Services"
import { InputTest } from "./test"
import { TopContainer } from "./TopPage"

export const HomeFullContainer = () => {

    return <div className=" w-full -mt-1">
        <div className="fixed w-full top-0">

            <Navigation/>
        </div>
        <TopContainer />
        <Careers />
        <About />
        <Services />
        <Footer />
    </div>

}