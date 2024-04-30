import React from 'react'

const NewsLetter = () => {
  return (
    <div className="my-20 lg:w-[70%] md:w-[70%] w-[90%] mx-auto font-poppins grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 row-auto items-center lg:gap-10 md:gap-10 rounded-lg shadow-xl py-5">
        <div className="m-5 rounded-lg w-full bg-[url('https://i.ibb.co/NxnRmKj/cloud.png')] bg-left-top bg-no-repeat">
            <img src="https://i.ibb.co/nw0pv0C/news.png" alt="" />
        </div>
        <div className='w-full px-10 flex flex-col items-start gap-8'>
            <h1 className='text-3xl w-[80%] font-medium'>Subscribe to our
Newsletter!</h1>
<p className='w-[80%]'>Be the first to get exclusive offers
ands the latest news</p>
<label className="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className='w-full bg-primary py-2 rounded-md text-white'>Subscribe Now</button>
        </div>
    </div>
  )
}

export default NewsLetter