import React from "react";
import toast from "react-hot-toast";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoPricetagOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";

const AddArts = () => {
  const handleAddEstate = (e) => {
    e.preventDefault();
    toast.success("Estate Added Successfully!");
    e.target.reset();
  };

  return (
    <form
      className="w-full py-20 font-poppins flex items-center flex-col bg-[url('https://i.postimg.cc/66FBrVVq/add-bg.png')] bg-no-repeat bg-cover bg-center"
      onSubmit={handleAddEstate}
    >
      <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">Add Arts & Crafts</h1>
        <span className="text-gray-800 font-bold lg:text-3xl md:text-xl text-lg">
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
        <h1 className="text-xl font-bold my-3">1. Art Description</h1>
        <div className="grid grid-cols-2 row-auto items-center gap-x-20 gap-y-5 my-5">
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
              name="subcategory"
              placeholder="* Subcategory"
              required
            />
            <BiCategoryAlt className="text-primary text-xl opacity-70" />
          </label>
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

          <select name="stock" className="select select-bordered w-full" required>
  <option disabled selected className="text-gray-400">Stock</option>
  <option>In Stock</option>
  <option>Made to Order</option>
</select>

        </div>
        <h1 className="text-xl font-bold mt-10 mb-3">2. User Details</h1>
        <div className="grid grid-cols-2 row-auto items-center gap-x-20 gap-y-5 my-5">
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="grow"
              name="username"
              placeholder="* UserName"
              required
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
          <label class="input input-bordered flex items-center justify-between gap-2 mb-3">
            <input
              type="text"
              class="py-5 grow"
              placeholder="* User Email"
              name="email"
              required
            />
            <SlEnvolope className="text-primary text-xl opacity-70" />
          </label>
        </div>
      </div>

      <button className="uppercase bg-primary text-white font-bold text-lg px-5 py-3 rounded-md">
        Submit estate
      </button>
    </form>
  );
};

export default AddArts;
