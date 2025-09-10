import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from '../../endpoints/Apis';
// import { FaPlus } from 'react-icons/fa';

const LogForm = (props) => {
  const [guidanceSkills,setguidanceSkills] = useState(true);
  const [career,setCareer] = useState("");
  const [careerSearch,setCareerSearch] = useState("")
  const [skill,setSkill] = useState("");
  const [skills,setSkills] = useState([])
  const [skillSearch,setSkillSearch] = useState("")
  const [careers,setCareers] = useState([])
  const [selectedSkills,setSelectedSkills] = useState([])

  const searchCareer = async() =>{
    console.log(careerSearch)
    await axios.get(Api+"/api/occupations/search?q="+careerSearch).then(res=>{
      setCareers(res.data)
      console.log(res.data)
    })

  }
  const searchSkills = async() =>{
    
    await axios.get(Api+"/api/occupations/search?q="+career).then(res=>{
      setSkills(res.data)
      // console.log(res.data)
    })

  }


  let handleAddSkill = (skill) =>{
    console.log(skill)
    setSelectedSkills(current => [...current, skill])
    setSkill("")
    console.log(selectedSkills)
  }
  useEffect(()=>{
    if(careerSearch.length>3){
      searchCareer()
    }
    console.log(career)
  },[careerSearch])
  useEffect(()=>{
    if(skillSearch.length>2){
      searchSkills()
      console.log("skills",skills)
    }
    },[skill])
  let handleChangeToCapital = (career) => {
    return career.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  let ChangeForm = (guidance) =>{
    setguidanceSkills(guidance)
    setCareer("")
    setSkills([])
  }


 let handleSubmit = async() =>{
    console.log(career)
    const res = await axios.post(`${Api}/api/careersFetch`,{career});
      console.log(res.data)
    props.returnedOccupations(res.data)
    props.selectedSkills(selectedSkills)
    props.isPopUp(false)
  }

return (
    <div className='w-[75%] h-[70vh] bg-gray-200 mt-10 -z-2 mx-auto overflow-hidden rounded-lg shadow'>
      <div className='w-full relative h-12 flex'>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${guidanceSkills ? "bg-[#71C55D] font-bold" : ""}`}
          onClick={() => ChangeForm(true)}
          type="button"
        >
          Career and Skills Guidance
        </button>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${!guidanceSkills ? "bg-[#71C55D] font-bold" : ""}`}
          onClick={() => ChangeForm(false)}
          type="button"
        >
         Skills Guidance
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
    <div>
      <input
        type="text"
        placeholder='Search Career'
        className='px-4 outline-none py-2 w-[65%] bg-gray-300  rounded-l'
        onChange={e => setCareerSearch(e.target.value)}
        value={careerSearch}
      />
      <select
        onChange={e => setCareer(e.target.value)}
         className={`bg-gray-400 py-2 px-4 outline-none rounded ${
    careerSearch.length > 3 ? "mt-2 relative w-[65%]" : "absolute top-0 left-0 w-[65%]"
  }`}
      >
        <option value="choose" disabled>choose</option>
        {careers.map((elem, index) => (
          <option value={elem.label} key={index}>
            {elem.label}
          </option>
        ))}
      </select>
    </div>
)}

  
  <div>
    <input
      type="text"
      placeholder='Search Skill'
      className="px-4 outline-none py-2 w-[65%] bg-gray-300 rounded-t" 
      onChange={e => setSkillSearch(e.target.value)}
      value={skillSearch}
      />
    <select
      onChange={e => handleAddSkill(e.target.value)}
      className={`bg-gray-400 py-2 px-4 outline-none rounded ${
    skillSearch.length > 3 ? "mt-2 relative w-[65%]" : "absolute top-0 left-0 w-[65%]"
  }`}
      >
      <option value="choose" disabled>choose</option>
      {skills.map((elem, index) => (
        <option value={elem.label} key={index}>
          {elem.label}
        </option>
      ))}
    </select>
  </div>
</div>

          <div className='flex gap-x-10 h-fit mt-10'>
            <button className='
            font-semibold bg-[#71C55D] hover:bg-green-500 text-white px-6 py-2 
            rounded-full transition-colors duration-200 cursor-pointer w-full md:w-auto'
            onClick={()=>handleSubmit()}
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
            <h3 className='text-xl font-semibold mb-2'>{career.length>4 ? handleChangeToCapital(career):"Choose a career"}</h3>
          )}
          <ol className='list-decimal list-inside space-y-1'>
            {selectedSkills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default LogForm
