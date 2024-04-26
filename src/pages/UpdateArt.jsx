import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateArt = () => {

const {data} = useLoaderData();

const {image,item_name, subcategory_name,short_description,rating,customization,processing_time,stock_status,_id,price} = data;

    const handleUpdateArt = (e) => {
        e.preventDefault();
        const item_name = e.target.title.value;
        const short_description = e.target.description.value;
        const subcategory_name = e.target.subcategory.value;
        const image = e.target.photo.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing_time = e.target.time.value;
        const stock_status = e.target.stock.value;
        const art = {item_name,short_description,subcategory_name,price,rating,customization,processing_time,stock_status,image}
    
        if(customization === "Customizable Art?"){
          toast.error('Please select customization!');
          return;
        }
    
        if(stock_status === "Stock"){
          toast.error('Please select stock!');
          return;
        }

        if(stock_status === "Subcategory"){
            toast.error('Please select Subcategory!');
            return;
          }
    
        axios.patch(`http://localhost:7284/arts/${_id}`,art)
        .then(res => {
          if(res.data.modifiedCount > 0){
            toast.success('Successfully Updated!')
          }
        })
        .catch(error => {
          toast.error('Something Went Wrong!')
        })
      };

  return (
    <form
      className="w-full py-20 font-poppins flex items-center flex-col bg-[url('https://i.postimg.cc/66FBrVVq/add-bg.png')] bg-no-repeat bg-cover bg-center"
      onSubmit={handleUpdateArt}
    >
      <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">Update {item_name}</h1>
        <span className="text-gray-800 font-bold lg:text-3xl md:text-xl text-lg">
          Edit your art details
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Art is something that can recharge your mind
        </p>
      </div>
      <div className="w-[90%] mx-auto my-10">
        <h1 className="text-3xl font-bold mb-5">Update Details</h1>
        <div className="grid grid-cols-2 row-auto items-center gap-x-20 gap-y-5 mt-10 mb-5">
          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Title</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              name="title"
              placeholder="* Title"
              defaultValue={item_name}
              required
            />
</label>
          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Description</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              placeholder="* Description"
              name="description"
              defaultValue={short_description}
              required
            />
</label>

          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Photo URL</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              placeholder="* Photo URL"
              name="photo"
              defaultValue={image}
              required
            />
</label>

<label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Subcategory</span>
  </div>
  <select defaultValue={subcategory_name} name="subcategory" className="select select-bordered w-full ">
  <option disabled selected className="text-gray-400">Subcategory</option>
  <option>Landscape Painting</option>
  <option>Watercolour Painting</option>
  <option>Oil Painting</option>
  <option>Charcoal Sketching</option>
  <option>Cartoon Drawing</option>
</select>
</label>

          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Price</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              name="price"
              placeholder="* Price"
              required
              defaultValue={price}
            />
</label>

          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Rating</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              name="rating"
              placeholder="* Rating"
              required
              defaultValue={rating}
            />
</label>
<label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Customization</span>
  </div>
  <select defaultValue={customization} name="customization" className="select select-bordered w-full ">
  <option disabled selected className="text-gray-400">Customizable Art?</option>
  <option>Yes</option>
  <option>No</option>
</select>
</label>


          <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Art Processing Time</span>
  </div>
  <input
              type="text"
              class="grow input input-bordered"
              name="time"
              placeholder="* Processing Time"
              required
              defaultValue={processing_time}
            />
</label>

<label className="form-control w-full">
  <div className="label">
    <span className="label-text font-medium">Select Stock</span>
  </div>
  <select defaultValue={stock_status} name="stock" className="select select-bordered w-full" required>
  <option disabled selected className="text-gray-400">Stock</option>
  <option>In Stock</option>
  <option>Made to Order</option>
</select>
</label>


        </div>
      </div>

      <button className="uppercase bg-primary text-white font-bold text-lg px-5 py-3 rounded-md">
        Update Art
      </button>
    </form>
  )
}

export default UpdateArt