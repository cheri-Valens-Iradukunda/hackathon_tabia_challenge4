import { About } from "./About"
import { Careers } from "./Careers"
import { Footer } from "./Footer"
import { Navigation } from "./navigation"
import { Services } from "./Services"
import { InputTest } from "./test"
import { TopContainer } from "./TopPage"
import LogForm from "../guidancePage/LogForm"

export const HomeFullContainer = () => {

    return <div className=" w-full -mt-1">
         
        <TopContainer />
        <Careers />
        <About />
        <Services />
    </div>

}