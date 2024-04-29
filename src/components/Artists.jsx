import React, { useEffect, useState } from 'react'

const Artists = () => {

const [users, setUsers] = useState([])

useEffect(()=>{
    fetch('https://johuarts-backend.vercel.app/users')
    .then(res => res.json())
    .then(data => {
        setUsers(data)
    })
},[])

  return (
<div className='w-full my-20 font-poppins'>
<div className="flex items-center justify-between gap-2 w-[90%] mx-auto mb-5">
      <div className="flex flex-col items-start gap-2 my-10">
      <h1 className="text-primary font-medium">Featured Artist's</h1>
      <span className=" font-bold lg:text-3xl md:text-xl text-lg">
        Explore our talented artist
      </span>
      <p className="text-[#737D8C] w-[60%] text-sm">
        Their arts always tells a story.
      </p>
      </div>
    </div>
<div className="w-full bg-[url('https://i.ibb.co/RN4VWCh/team-section.webp')] bg-no-repeat bg-cover bg-center grid lg:grid-cols-[20%_80%] grid-cols-1 row-auto items-center lg:pt-10 py-5">
        <img src="https://i.ibb.co/Q9fKPYL/man-2.webp" loading='lazy' alt="" className='hidden lg:inline-block'/>
        <div className='w-full grid grid-cols-3 row-auto items-center gap-5 px-10'>
            {
                users && users.map(user => (
                    <div className='flex flex-col items-center text-center'>
                <img src={user?.user_photo || 'https://i.ibb.co/W56bzX2/image-asset.jpg'}  loading='lazy' alt="" className='w-48 mb-3 rounded-md'/>
                <h1 className='font-medium text-lg'>{user?.user_name}</h1>
                <p className='text-sm'>{user?.artist_type}</p>
            </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default Artists