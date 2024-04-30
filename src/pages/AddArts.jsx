import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHammerOutline, IoImageOutline, IoPricetagOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";

const AddArts = () => {

const {user} = useAuth();
const navigate = useNavigate();

  const handleAddArt = (e) => {
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
    const user_name = e.target.username.value;
    const user_email = e.target.useremail.value;
    const materials = e.target.materials.value;
    const material = materials.split(',')
    const user_photo = user?.photoURL;
    const art = {item_name,short_description,subcategory_name,price,rating,customization,processing_time,stock_status,user_name,user_email,image,user_photo,material}

    if(customization === "Customizable Art?"){
      toast.error('Please select customization!');
      return;
    }

    if(subcategory_name === "Subcategory"){
      toast.error('Please select Subcategory!');
      return;
    }

    if(stock_status === "Stock"){
      toast.error('Please select stock');
      return;
    }
    axios.post('https://johuarts-backend.vercel.app/arts',art)
    .then(res => {
      if(res.data.insertedId){
        e.target.reset();
        toast.success('Successfully Added Your Art!')
      }
    })
    .catch(error => {
      toast.error('Something Went Wrong!')
    })
  };

  return (
    <form
      className="w-full py-20 font-poppins flex items-center flex-col"
      onSubmit={handleAddArt}
    >
      <div
        onClick={() => navigate("/")}
        className="flex items-center w-[90%] mx-auto mb-10 cursor-pointer"
      >
        <IoIosArrowRoundBack className="text-2xl"/>
        <span className=" text-base font-medium">
          Back to home
        </span>
      </div>
      <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">Add Arts & Crafts</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Add Arts, Sell Art & Earn Profit
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          We have strong network with art selling.
        </p>
      </div>
      <div className="w-[90%] mx-auto my-10">
        <h1 className="text-3xl font-bold mb-3">Arts Details</h1>
        <p className="text-[#737D8C] text-sm">
          These fields are mandatory: Title, Property Media, Description
        </p>
        <h1 className="text-xl font-bold my-5">1. Art Description</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-x-20 gap-y-5 my-5">
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="grow"
              name="title"
              placeholder="* Title"
              required
            />
            <MdOutlineTitle className="text-primary text-xl opacity-70"/>
          </label>
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              placeholder="* Description"
              name="description"
              required
            />
            <FaPencil className="text-primary text-xl opacity-70" />
          </label>
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              placeholder="* Photo URL"
              name="photo"
              required
            />
            <IoImageOutline className="text-primary text-xl opacity-70" />
          </label>
          <select name="subcategory" className="select select-bordered w-full ">
  <option disabled selected className="text-gray-400">Subcategory</option>
  <option>Landscape Painting</option>
  <option>Portrait Drawing</option>
  <option>Watercolour Painting</option>
  <option>Oil Painting</option>
  <option>Charcoal Sketching</option>
  <option>Cartoon Drawing</option>
</select>
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              name="price"
              placeholder="* Price"
              required
            />
            <IoPricetagOutline className="text-primary text-xl opacity-70" />
          </label>
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              name="rating"
              placeholder="* Rating"
              required
            />
            <FaRegStar className="text-primary text-xl opacity-70" />
          </label>
          <select name="customization" className="select select-bordered w-full ">
  <option disabled selected className="text-gray-400">Customizable Art?</option>
  <option>Yes</option>
  <option>No</option>
</select>
<label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              name="time"
              placeholder="* Processing Time"
              required
            />
            <IoTimeOutline className="text-primary text-xl opacity-70" />
          </label>

          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              name="materials"
              placeholder="* Materials (Comma One After one)"
              required
            />
            <IoHammerOutline className="text-primary text-xl opacity-70" />
          </label>

          <select name="stock" className="select select-bordered w-full" required>
  <option disabled selected className="text-gray-400">Stock</option>
  <option>In Stock</option>
  <option>Made to Order</option>
</select>

        </div>
        <h1 className="text-xl font-bold mt-10 mb-3">2. User Details</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-x-20 gap-y-5 my-5">
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="grow"
              name="username"
              placeholder="* UserName"
              defaultValue={user?.displayName}
              required
              disabled
              data-tooltip-id="name" data-tooltip-content={`You can't change name!`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#FF5733"
              class="w-6 h-6 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </label>
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3" data-tooltip-id="email" data-tooltip-content={`You can't change email!`}>
            <input
              type="text"
              class="py-5 grow"
              placeholder="* User Email"
              name="useremail"
              disabled
              value={user?.email}
            />
            <SlEnvolope className="text-primary text-xl opacity-70" />
          </label>
        </div>
      </div>

      <button className="uppercase bg-primary text-white font-bold text-base px-4 py-3 rounded-md">
      Add Art
      </button>
      <Tooltip id="email"/>
      <Tooltip id="name"/>
    </form>
  );
};

export default AddArts;
