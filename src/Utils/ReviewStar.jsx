import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewStar = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const fullStarArray = Array(fullStars).fill(<FaStar className='text-yellow-400'/>);
  if (hasHalfStar) {
    fullStarArray.push(<FaStarHalfAlt className='text-yellow-400'/>);
  }

  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-1'>
      {fullStarArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      </div>
      <p className='text-primary text-sm font-bold'>{rating}</p>
    </div>
  );
};

export default ReviewStar;
