import axios from "axios"
import { use, useState } from "react"

export const Test = () =>{
    const [language1,setLanguage1] = useState("")
    const [language2,setLanguage2] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        let array = [language1,language2]
        console.log(array)
        let res = axios.post("http://localhost:8801/search",array)
        console.log(res.data)

    }

    return <div>
        <input type="text" onChange={(event) => setLanguage1(event.target.value)}/>
        <input type="text" onChange={(event) => setLanguage2(event.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
}