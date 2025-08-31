import React, { useState } from 'react'

const LogForm = () => {
  const [guidanceSkills,setguidanceSkills] = useState(true);
  return (
    <div className='w-full max-w-2xl bg-gray-200 mx-auto mt-8 overflow-hidden rounded-lg shadow'>
      <div className='w-full relative h-12 flex'>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${guidanceSkills ? "bg-green-200 font-bold" : ""}`}
          onClick={() => setguidanceSkills(true)}
          type="button"
        >
          Skills Guidance
        </button>
        <button
          className={`w-1/2 z-10 relative h-full transition-colors duration-200 ${!guidanceSkills ? "bg-green-200 font-bold" : ""}`}
          onClick={() => setguidanceSkills(false)}
          type="button"
        >
          Career and Skills Guidance
        </button>
        <div
          className={`bg-green-300 h-full w-1/2 absolute top-0 transition-all duration-200 ${guidanceSkills ? "left-0" : "left-1/2"}`}
          style={{ zIndex: 0 }}
        ></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-10'>
        <div className='md:col-span-2 grid grid-rows-2 gap-4'>
          {guidanceSkills && (
            <input
              type="text"
              placeholder='Select Career'
              className='bg-gray-300 px-4 py-2 rounded w-full'
            />
          )}
          <input
            type="text"
            placeholder='Select your skill'
            className='bg-gray-300 px-4 py-2 rounded w-full'
          />
        </div>
        <div>
          {guidanceSkills && (
            <h3 className='text-xl font-semibold mb-2'>Software Development</h3>
          )}
          <ol className='list-decimal list-inside space-y-1'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ol>
        </div>
      </div>
      <div className="px-4 pb-6 flex flex-col items-center md:items-start">
        <button
          className='font-semibold bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full transition-colors duration-200 cursor-pointer w-full md:w-auto'
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default LogForm
