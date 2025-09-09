import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from '../../endpoints/Apis';
// import { FaPlus } from 'react-icons/fa';

const LogForm = (props) => {
  const [guidanceSkills,setguidanceSkills] = useState(true);
  const [career,setCareer] = useState("");
  const [skill,setSkill] = useState("");
  const [skills,setSkills] = useState([])
  const [careers,setCareers] = useState(['software development',"Networking","Programming"])

  const searchSkill = async() =>{
    
    await axios.get(Api+"/api/occupations/search?q="+career).then(res=>{
      setCareers(res.data)
      console.log(res.data)
    })

  }

  let handleAddSkill = () =>{
    setSkills(current => [...current, skill])
    setSkill("")
  }
  useEffect(()=>{
    if(career.length>3){
      searchSkill()
    }
  },[career])
  useEffect(()=>console.log(skills),[skills])
  let handleChangeToCapital = (career) => {
    return career.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  let ChangeForm = (guidance) =>{
    setguidanceSkills(guidance)
    setCareer("")
    setSkills([])
  }
  return (
    <div className='w-full max-w-2xl bg-gray-200 mt-10 -z-2 mx-auto  overflow-hidden rounded-lg shadow'>
      <div className='w-full relative h-12 flex'>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${guidanceSkills ? "bg-[#71C55D] font-bold" : ""}`}
          onClick={() => ChangeForm(true)}
          type="button"
        >
          Skills Guidance
        </button>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${!guidanceSkills ? "bg-[#71C55D] font-bold" : ""}`}
          onClick={() => ChangeForm(false)}
          type="button"
        >
          Career and Skills Guidance
        </button>
        <div
          className={`bg-[#71C55D] h-full w-1/2 absolute top-0 transition-all duration-200 ${guidanceSkills ? "left-0" : "left-1/2"}`}
          style={{ zIndex: 0 }}
        ></div>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-10'>
        <div className='md:col-span-2 grid grid-rows-2 h-fit space-y-4 '>

          <div className='space-y-4'>
              {guidanceSkills && (
              <div className='flex'>
                <input
                  type="text"
                  placeholder='Select Career'
                  className='bg-gray-300 px-4 outline-none py-2 rounded w-full'
                  onChange={e=>setCareer(e.target.value)}
                  value={career}
                  list={career.length>3?"careers":""}
                  options={careers}
                  getOptionLabel={(option) => option.label}
                />
                <datalist id='careers'>
                  {
                    careers.map((elem,index)=>(
                      <option value={elem.label} key={index}>{elem.description}</option>
                    ))
                  }
                </datalist>  
              </div>
              )}
            <div className='flex'>

              <input
                type="text"
                placeholder='Select your skill'
                className='bg-gray-300 px-4 py-2 outline-none rounded-l w-full'
                onChange={e=>setSkill(e.target.value)}
                list='skills'
                value={skill}
              />
              <datalist id='skills'>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
              </datalist>
              <button onClick={handleAddSkill} className='bg-gray-400 py-2 px-3'>
                Add
              </button>
            </div>
          </div>
          <div className='flex justify-between h-fit'>
            <button className='
            font-semibold bg-[#71C55D] hover:bg-green-500 text-white px-6 py-2 
            rounded-full transition-colors duration-200 cursor-pointer w-full md:w-auto'
            // onClick={()=>handleSubmit()}
            >
            Generate
          </button>
          <button className='
          font-semibold bg-gray-500 hover:bg-gray-400 text-white px-6 py-2 
            rounded-full transition-colors duration-200 cursor-pointer w-full md:w-auto'
            onClick={()=>props.isPopUp(false)}
          >Close</button>
          </div>
        </div>
        <div>
          {guidanceSkills && (
            <h3 className='text-xl font-semibold mb-2'>{career.length>4 && careers.includes(career)?handleChangeToCapital(career):"Choose a career"}</h3>
          )}
          <ol className='list-decimal list-inside space-y-1'>
            {skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default LogForm
