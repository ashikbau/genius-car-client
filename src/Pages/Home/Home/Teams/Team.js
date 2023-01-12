import React from 'react';
import { FaFacebook, FaFacebookF, FaFacebookMessenger, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Team = ({tm}) => {
    // console.log(tm)
    const {image,team,specialist
    } = tm;


    return (
         <div className="card w-75 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  
  <div className="card-body items-center text-center">
  
 
 
 
    <h2 className="card-title">{team}</h2>
    
    <p>{specialist}</p>
    
  </div>
  <div className='flex  justify-center'>
               
                <span className='px-1'><FaFacebook>FaceBook</FaFacebook></span>
                <span className='px-1'><FaTwitter>Twiter</FaTwitter></span>
                <span className='px-1'><FaWhatsapp>Whatsapp</FaWhatsapp></span>
                <span className='px-1'><FaFacebookMessenger>Messenger</FaFacebookMessenger></span>
            </div>
</div>
    );
};

export default Team;