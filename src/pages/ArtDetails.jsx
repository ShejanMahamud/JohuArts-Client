import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAuth from "../hooks/useAuth";
import useMyArts from "../hooks/useMyArts";
import ReviewStar from "./../utils/ReviewStar";

const ArtDetails = () => {
  const navigate = useNavigate();
  const {user} = useAuth()
  const { data } = useLoaderData();
  const {data: userArtCount,isPending} = useMyArts();
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    rating,
    customization,
    processing_time,
    stock_status,
    price,
    material,
    user_name,
    user_email
  } = data;

  const previousPrice = Math.floor(Math.random() * 100) + 1;

  if (isPending) {
    return (
      <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto py-20 font-poppins">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 w-full mx-auto mb-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
            stroke="#331A15"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-[#331A15] text-base font-medium">
          Back to home
        </span>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 row-auto gap-10 lg:gap-x-20 items-start w-full">
        <div className="grid grid-cols-2 row-auto items-center gap-5 w-full">
          <img
            src={image}
            alt="art.jpg"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="w-full grid grid-cols-2 row-auto items-center gap-5">
            <ul id="Frames" className="col-span-2">
              <li class="Frame">
                <a href={image}>
                  <img
                    src={image}
                    alt="Hanafubuki - Cherry blossom blizzard"
                    className="h-full w-full object-cover"
                  />
                </a>
              </li>
            </ul>
            <figure>
              <div class="outerBevel">
                <div class="flatSurface">
                  <div class="innerBevel">
                    <img src={image} />
                  </div>
                </div>
              </div>
            </figure>
            <img
              src={image}
              alt="art.jpg"
              className="w-full object-cover p-2 border-8 border-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-3">
            <span className="bg-primary px-3 py-1 rounded-md text-white font-medium text-xs mb-3">
              {stock_status}
            </span>
            <span className="bg-primary px-3 py-1 rounded-md text-white font-medium text-xs mb-3">
              Free
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-3">{item_name}</h1>
          <div className="flex items-center gap-3 mb-5 flex-wrap text-xs">
            <p className="text-primary font-medium text-sm uppercase">
              {subcategory_name}
            </p>
            <div className="h-[20px] w-[2px] border border-primary border-opacity-30 rounded-full"></div>
            <ReviewStar rating={parseFloat(rating)} />
            <div className="h-[20px] w-[2px] border border-primary border-opacity-30 rounded-full"></div>
            <p className="text-sm font-medium">100+ Reviews</p>
          </div>
          <h1 className="font-semibold uppercase mb-3">Description</h1>
          <ul className="list-disc pl-5 text-sm mb-5">
            <li>{short_description}</li>
          </ul>
          <h1 className="font-semibold uppercase mb-3">Materials Used</h1>
          <ul className=" text-sm mb-5 flex items-center gap-5 uppercase">
            {material && material.map((data) => <li>{data}</li>)}
          </ul>
          <h1 className="font-semibold uppercase mb-1">Price</h1>
          <p className="text-xs opacity-50 mb-3">USD(All Tax's Included)</p>
          <div className="flex items-center gap-3 mb-5">
            <p className="text-xl text-primary font-semibold">$ {price}</p>
            <p className="text-xl text-gray-500 font-semibold line-through">
              $ {parseInt(price) + previousPrice}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md font-medium border-2 border-primary">
              <BsCart2 />
              <span>Add To Cart</span>
            </button>
            <button className="bg-transparent border-2 border-primary px-4 py-2 rounded-md text-primary font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full my-20">
        <h1 className="font-medium text-3xl mb-5">Art Details</h1>
        <Tabs selectedTabClassName="react-tabs__tab--selected">
          <TabList>
            <Tab>Specification</Tab>
            <Tab>Description</Tab>
            <Tab>Author</Tab>
          </TabList>

          <TabPanel>
            <table className="table w-full my-5">
              <tbody>
                <tr className="hover">
                  <td className="font-medium">Title</td> <td>{item_name}</td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Customization</td> <td>{customization}</td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Rating</td> <td>{rating}</td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Processing Time</td> <td>{processing_time}</td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Category</td> <td>{subcategory_name}</td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Materials</td> <td className="flex items-center gap-2 uppercase">{
                  material &&  material.map(item => <p>{item},</p>)
                    }</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <p className="my-5">{short_description}</p>
          </TabPanel>
          <TabPanel>
            <div className="flex items-center gap-5 my-10">
                <div className="flex flex-col items-center gap-3">
                <img src={user?.photoURL || 'https://i.ibb.co/Lxvz266/user-1.png'} alt="user.png" className="h-40 w-40 rounded-full border-2 border-primary"/>
                <p className="font-medium">{userArtCount.length} Products</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <p className="font-medium">{user_name}</p>
                    <p>{user_email}</p>
                </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtDetails;
