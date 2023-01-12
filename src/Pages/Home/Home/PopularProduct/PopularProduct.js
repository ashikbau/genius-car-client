import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopularProduct = ({product}) => {
    const {image,name,price,rating,_id} = product;
   


    return (
            <div className="card w-75 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  
  <div className="card-body items-center text-center">
  
  <span><FaStar className='text-yellow-300'></FaStar></span>
 
 
    <h2 className="card-title">{name}</h2>
    
    <p>$ {price}</p>

    
  </div>
  <div className="card-actions justify-center  mb-2">
                   <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">CheckOut</button></Link>
          </div>
</div>
    );
};

export default PopularProduct;