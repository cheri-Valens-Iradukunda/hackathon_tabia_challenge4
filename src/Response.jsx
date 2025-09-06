import { useState } from "react";
import LogForm from "./components/guidancePage/LogForm";

 
const Arrays =({id,title,description, resource,links}) =>{

      return (
    
        <div className="border-2 border-green-300 space-y-3 p-5 rounded-2xl bg-white break-words shadow-xl shadow-gray-300"> 
            <h2 className="font-semibold text-2xl pt-3 pb-2">{title}</h2>
            <p>{description}</p>
            <p className="font-semibold text-xl underline">{resource}</p>
            <p className="cursor-pointer hover:underline decoration-1">{links}</p>
        </div>
      )
};

 function Response(){
  const [isPopUp,setIsPopUp] = useState(false)
    const data=[
        {id:1,title:"HTML",description:"find your path  your path   world carrer why you shouldn't do this it's easy you by approaching real  world carrer why you shouldn't do this it's easy you can build your own empire", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:2,title:"CSS",description:"find path  your path do this it's easy you your path by approaching real   your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:3,title:"JavaScript",description:"find  path  your path do this it's easy you your path by approaching real  your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:4,title:"React-js",description:"find your path  your path do this it's easy you your path by approaching real   path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},

          {id:5,title:"Git & Github",description:"find your path  your path   world carrer why you shouldn't do this it's easy you by approaching real  world carrer why you shouldn't do this it's easy you can build your own empire", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:6,title:"Tailwindcss",description:"find path  your path do this it's easy you your path by approaching real   your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:7,title:"PostgreSQL",description:"find  path  your path do this it's easy you your path by approaching real  your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
        {id:8,title:"Node.js",description:"find your path  your path do this it's easy you your path by approaching real   path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},

    ]
    return (
        <>
        <div className="flex justify-end me-5">
          <button onClick={() => setIsPopUp(!isPopUp)} className="text-white bg-green-700 px-5 py-2 text-xl me-0 rounded-xl">Search</button>
        </div>
        <div className={`${isPopUp ? "block" : "hidden"} bg-gradient-to-br p-5 from-blue-500/25 to-green-500/25  z-100 h-screen w-screen backdrop-blur-lg fixed top-0`}>
          <LogForm isPopUp = {setIsPopUp}/>
        </div>
        <p className="font-bold text-3xl text-center pt-8 pb-4">Software Development</p>
       <div className="gap-6 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] h-auto mx-auto">
        
      {data.map((item) => (
        <Arrays
          key={item.id} 
          title={item.title} 
          description={item.description} 
          resource={item.resource}
          links={item.links} 
        />
      ))}
    </div>
    <div>
      <div className="px-10 py-4 w-[90%] mx-auto  flex items-center justify-between">

      <button className="border border-gray-500 bg-lime-900 p-3 rounded-full font-semibold text-white cursor-pointer">Previous</button>
      <div className="flex space-x-1.5">
        <div className="bg-green-300 border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">1</div>
        <div className="bg-green-300 border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">2</div>
        <div className="bg-green-300 border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">3</div>
        <div className="bg-green-300 border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">4</div>
      </div>
      <button className="border border-gray-500 bg-lime-500 py-3 px-6 rounded-4xl font-semibold text-white cursor-pointer">Next</button>
      </div>
    </div>
        </>
    )
 }

 export default Response