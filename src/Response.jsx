 
const Arrays =({id,title,description, resource,links}) =>{
      return (
    
        <div className="border-2 border-green-300 space-y-3 p-5 rounded-2xl  break-words shadow-xl shadow-gray-300"> 
            <h2 className="font-semibold text-2xl pt-5 pb-2">{title}</h2>
            <p>{description}</p>
            <p className="font-semibold text-xl underline">{resource}</p>
            <p className="cursor-pointer hover:underline decoration-1">{links}</p>
        </div>
      )
};

 function Response(){
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
        <p className="font-bold text-3xl text-center p-8">Software Development</p>
       <div className="gap-6 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
        
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
        </>
    )
 }

 export default Response