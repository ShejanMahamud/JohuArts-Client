import React from 'react'

const AllArts = () => {
  return (
    <div className='w-full py-20 font-poppins'>
        <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">All Arts & Crafts</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Explore all the arts & crafts
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          We always try to provide the best art.
        </p>
      </div>
      <div className="w-[90%] mx-auto my-20">
  <table className="table flex items-center justify-center">
    <thead>
      <tr>
        <th>Art Details</th>
        <th>User Details</th>
        <th>Art Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/NN0Lqt3/art-1.jpg" alt="art.png" />
              </div>
            </div>
            <div>
              <div className="font-bold">Sleepy Women</div>
              <div className="text-sm opacity-50">Water Color Painting</div>
            </div>
          </div>
        </td>
        <td>
          Shejan Mahamud
          <br/>
          <span className="badge badge-ghost badge-sm">dev@gmail.com</span>
        </td>
        <td>4.5</td>
        <th>
          <button className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
        <button className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
        <button className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
        <button className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button>
        </th>
      </tr>
    </tbody>  
  </table>
</div>
    </div>
  )
}

export default AllArts