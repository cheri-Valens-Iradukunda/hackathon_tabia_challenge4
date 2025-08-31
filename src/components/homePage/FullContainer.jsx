import { Navigation } from "./navigation"
import { InputTest } from "./test"
import { TopContainer } from "./TopPage"
import LogForm from "../guidancePage/LogForm"

export const HomeFullContainer = () => {

    return <div className="w-screen ">
        <Navigation />
        <LogForm />
        <TopContainer />
        {/* <InputTest /> */}
    </div>

}