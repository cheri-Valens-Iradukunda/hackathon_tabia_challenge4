// import { useEffect, useState } from "react";
// import LogForm from "./components/guidancePage/LogForm";

 
// const Arrays =({id,title,description, resource,links}) =>{


//       return (
    
//         <div className="border-2 border-green-300 space-y-3 p-5 rounded-2xl bg-white break-words shadow-xl shadow-gray-300"> 
//             <h2 className="font-semibold text-2xl pt-3 pb-2">{title}</h2>
//             <p>{description}</p>
//             <p className="font-semibold text-xl underline">{resource}</p>
//             <p className="cursor-pointer hover:underline decoration-1">{links}</p>
//         </div>
//       )
// };

//  function Response(){
//   const datas=[
//         {id:1,title:"HTML",description:"find your path  your path   world carrer why you shouldn't do this it's easy you by approaching real  world carrer why you shouldn't do this it's easy you can build your own empire", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:2,title:"CSS",description:"find path  your path do this it's easy you your path by approaching real   your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:3,title:"JavaScript",description:"find  path  your path do this it's easy you your path by approaching real  your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:4,title:"React-js",description:"find your path  your path do this it's easy you your path by approaching real   path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},

//           {id:5,title:"Git & Github",description:"find your path  your path   world carrer why you shouldn't do this it's easy you by approaching real  world carrer why you shouldn't do this it's easy you can build your own empire", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:6,title:"Tailwindcss",description:"find path  your path do this it's easy you your path by approaching real   your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:7,title:"PostgreSQL",description:"find  path  your path do this it's easy you your path by approaching real  your path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},
//         {id:8,title:"Node.js",description:"find your path  your path do this it's easy you your path by approaching real   path by approaching real world carrer", resource:"Resources:",links:["https://www.instagram.com/reels/DNKx6H0upgv/","https://www.instagram.com/reels/DNKx6H0upgv/"]},

//     ]
//   const [occupations,setOcupations] = useState({})
//   const [selectedSkills,setSelectedSkills] = useState([])
//   const [isPopUp,setIsPopUp] = useState(false)
//   const [data,setData ] = useState(datas)
//   const [number,setNumber] = useState(0)

//   useEffect(()=>{
//     if(occupations.hasOwnProperty('skills')){
//       setData(occupations.skills)
//       console.log(selectedSkills)
//       console.log(arrPages)
//     }
//   },[isPopUp])
//   let numberOfPages = Math.ceil(data.length/8)
//   let arrPages = Array.from({length:numberOfPages},(_,i)=>i+1)
//   console.log(arrPages)

//   let hasFetched = occupations.hasOwnProperty("skills")
//     return (
//         <>
//         <div className="flex justify-end me-5">
//           <button onClick={() => {setIsPopUp(!isPopUp);
//             document.getElementById('popup').style.height="100vh"
//           }} className="text-white bg-green-700 px-5 py-2 text-xl me-0 rounded-xl">Search</button>
//         </div>
//         <div id="popup" className={`${isPopUp ? "block" : "hidden"} bg-gradient-to-br transition-all duration-700 p-5 from-blue-500/25 to-green-500/25  z-100 h-0 w-screen backdrop-blur-lg fixed top-0`}>
//           <LogForm isPopUp = {setIsPopUp} returnedOccupations = {setOcupations} selectedSkills = {setSelectedSkills}/>
//         </div>
//         <p className="font-bold text-3xl text-center pt-8 pb-4">{hasFetched?occupations.career.label:"Popular skills"}</p>
//        <div className="gap-6 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] h-auto mx-auto">
//       {data.map((item,index) => {
//         if()
//           return <Arrays
//           key={index} 
//           title={hasFetched?item.label: item.title} 
//           description={item.description} 
//           resource={item.resource}
//           links={item.links} 
//         />
//       })}
//     </div>
//     <div>
//       <div className="px-10 py-4 w-[90%] mx-auto  flex items-center justify-between">

//       <button className="border border-gray-500 bg-lime-900 p-3 rounded-full font-semibold text-white cursor-pointer">Previous</button>
//       <div className="flex space-x-1.5">
//         {
//           arrPages.map((elem,index)=>(
            
//             <div key={index} className="bg-green-300 border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">{elem}</div>

//           ))
//         }
//        </div>
//       <button className="border border-gray-500 bg-lime-500 py-3 px-6 rounded-4xl font-semibold text-white cursor-pointer">Next</button>
//       </div>
//     </div>
//         </>
//     )
//  }

//  export default Response

import { useEffect, useState } from "react";
import LogForm from "./components/guidancePage/LogForm";

const Arrays = ({ id, title, description, resource, links }) => {
  return (
    <div className="border-2 border-green-300 space-y-3 p-5 rounded-2xl bg-white break-words shadow-xl shadow-gray-300">
      <h2 className="font-semibold text-2xl pt-3 pb-2">{title}</h2>
      <p>{description}</p>
      <p className="font-semibold text-xl underline">{resource}</p>
      <p className="cursor-pointer hover:underline decoration-1">{links}</p>
    </div>
  );
};

function Response() {
  const datas = [
    { id: 1, title: "HTML", description: "find your path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 2, title: "CSS", description: "find path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 3, title: "JavaScript", description: "find path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 4, title: "React-js", description: "find your path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 5, title: "Git & Github", description: "find your path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 6, title: "Tailwindcss", description: "find path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 7, title: "PostgreSQL", description: "find path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
    { id: 8, title: "Node.js", description: "find your path...", resource: "Resources:", links: ["https://www.instagram.com/reels/DNKx6H0upgv/"] },
  ];

  const [occupations, setOcupations] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);
  const [data, setData] = useState(datas);
  const [number, setNumber] = useState(1); // current page (start from 1)

  useEffect(() => {
    if (occupations.hasOwnProperty("skills")) {
      setData(occupations.skills);
    }
  }, [isPopUp]);

  let itemsPerPage = 8; // how many cards per page
  let numberOfPages = Math.ceil(data.length / itemsPerPage);
  let arrPages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  // slice the data based on current page
  const startIndex = (number - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  let hasFetched = occupations.hasOwnProperty("skills");

  return (
    <>
      <div className="flex justify-end me-5">
        <button
          onClick={() => {
            setIsPopUp(!isPopUp);
            document.getElementById("popup").style.height = "100vh";
          }}
          className="text-white bg-green-700 px-5 py-2 text-xl me-0 rounded-xl"
        >
          Search
        </button>
      </div>

      <div
        id="popup"
        className={`${
          isPopUp ? "block" : "hidden"
        } bg-gradient-to-br transition-all duration-700 p-5 from-blue-500/25 to-green-500/25  z-100 h-0 w-screen backdrop-blur-lg fixed top-0`}
      >
        <LogForm
          isPopUp={setIsPopUp}
          returnedOccupations={setOcupations}
          selectedSkills={setSelectedSkills}
        />
      </div>

      <p className="font-bold text-3xl text-center pt-8 pb-4">
        {hasFetched ? occupations.career.label : "Popular skills"}
      </p>

      <div className="gap-6 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] h-auto mx-auto">
        {paginatedData.map((item, index) => (
          <Arrays
            key={index}
            title={hasFetched ? item.label : item.title}
            description={item.description}
            resource={item.resource}
            links={item.links}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div>
        <div className="px-10 py-4 w-[90%] mx-auto  flex items-center justify-between">
          <button
            disabled={number === 1}
            onClick={() => setNumber((prev) => Math.max(prev - 1, 1))}
            className="border border-gray-500 bg-lime-900 p-3 rounded-full font-semibold text-white cursor-pointer disabled:opacity-50"
          >
            Previous
          </button>

          <div className="flex space-x-1.5">
            {arrPages.map((elem, index) => (
              <div
                key={index}
                onClick={() => setNumber(elem)}
                className={`${
                  number === elem ? "bg-lime-500 text-white" : "bg-green-300"
                } border border-lime-400 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center`}
              >
                {elem}
              </div>
            ))}
          </div>

          <button
            disabled={number === numberOfPages}
            onClick={() =>
              setNumber((prev) => Math.min(prev + 1, numberOfPages))
            }
            className="border border-gray-500 bg-lime-500 py-3 px-6 rounded-4xl font-semibold text-white cursor-pointer disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Response;
