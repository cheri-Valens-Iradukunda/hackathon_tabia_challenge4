import { useEffect, useState } from "react"

export const InputTest = () => {
    let [inputValue,setInputValue] = useState("")
    useEffect(()=>{
        console.log(inputValue)
    },[inputValue])
    
    return <div className="">
        <input type="text" list="languages" onChange={e=> setInputValue(e.target.value)}/>
        <datalist id="languages">
            <option value="Java">java</option>
            <option value="javascript">javaScript</option>
            <option value="python">python</option>
            <option value="C++">C++</option>
        </datalist>
    </div>

}